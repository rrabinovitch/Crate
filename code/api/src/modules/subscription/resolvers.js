// App Imports
import models from '../../setup/models'

// Get subscription by ID
// returns an array of the user and the crate they requested based on the id of the crate
export async function get(parentValue, { id }) {
  return await models.Subscription.findOne({
    // if id matches
    where: { id },
    // return array of user and the crate that matches
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Get subscription by user
// returns an array of objects with the user and their crates
export async function getByUser(parentValue, {}, { auth }) {
  // if there is a user & their id !== 0
  if(auth.user && auth.user.id > 0) {
    return await models.Subscription.findAll({
      // if userId matches id passed in
      where: {
        userId: auth.user.id
      },
      // return array of objects with the user object, and an object for each crate they have
      include: [
        {model: models.User, as: 'user'},
        {model: models.Crate, as: 'crate'},
      ]
    })
    // if there is no user id passed in, return this error
  } else {
    throw new Error('Please login to view your subscriptions.')
  }
}

// Get all subscriptions
// returns an array of objects of users and crates
export async function getAll() {
  return await models.Subscription.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Create subscription
// adds a subscription to a user's subscriptions
// returns an updated user Subscription w/new crate
export async function create(parentValue, { crateId }, { auth }) {
  // if there's a User & they have a user id
  if(auth.user && auth.user.id > 0) {
    // create and add a subscription w/the crate id & user id
    return await models.Subscription.create({
      crateId,
      userId: auth.user.id
    })
  // if there is no user & no user id, throws an error
  } else {
    throw new Error('Please login to subscribe to this crate.')
  }
}

// Delete subscription
// removes a user's subscriptions
// returns updated user subscription array
export async function remove(parentValue, { id }, { auth }) {
  // if there's a User & they have a user id
  if(auth.user && auth.user.id > 0) {
    // remove matching crate from existing array
    return await models.Subscription.destroy({where: {id, userId: auth.user.id}})
  // if there is no user & no user id, throws an error
  } else {
    throw new Error('Access denied.')
  }
}
