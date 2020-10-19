const bcrypt = require('bcrypt');

export const userData1 = {
  id: 1,
  name: "The Admin",
  email: "admin@crate.com",
  password: bcrypt.hashSync('password123', 10),
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date()
};


export const userData2 = {
  id: 2,
  name: "The User",
  email: "user@crate.com",
  password: bcrypt.hashSync('password321', 10),
  role: "user",
  createdAt: new Date(),
  updatedAt: new Date()
};
