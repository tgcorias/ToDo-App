const Joi = require('joi');

const defaultType = Joi.string().alphanum().min(1).max(100);

const id = defaultType;
const email = defaultType;
const password = defaultType;
const name = Joi.string().min(1).max(50);


const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required()
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password
});

const deleteUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, deleteUserSchema };
