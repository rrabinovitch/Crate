// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Update user
export async function update(parentValue, { id, style }) {
  var commaRemove = style.replace(/,/g, '')
  const array = Array.from(commaRemove)
  let map = new Map()
  for (let num of array) {
      map.set(num, (map.get(num) || 0) + 1)
  }

  let mostCommonNumber = NaN
  let maxCount = -1
  for (let [num, count] of map.entries()) {
      if (count > maxCount) {
          maxCount = count
          mostCommonNumber = num
      }
  }

  // sets style variable
  var newStyle = null

  //assigns newStyle variable
  if (mostCommonNumber == 1) {
    newStyle = "Sporty"
  } else if (mostCommonNumber == 2) {
    newStyle = "Scary"
  } else if (mostCommonNumber == 3) {
    newStyle = "Posh"
  } else if (mostCommonNumber == 4) {
    newStyle = "Gingery"
  } else {
    newStyle = "Cute"
  }

  //updates user with new variable
  const user = await models.User.update(
    {
      style: newStyle
    },
    {where: {id}}
  )
  return await getById({},{id})
}

// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })
  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role,
        style: userDetails.style
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.User.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

// User genders
export async function getGenders() {
  return Object.values(params.user.gender)
}
