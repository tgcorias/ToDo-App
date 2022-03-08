const Joi = require('joi');

const id = Joi.number().integer().min(0);
const taskName = Joi.string().alphanum().min(1).max(150);
const idUser = Joi.string().alphanum().min(1).max(150);
const completed = Joi.boolean();


const createTaskSchema = Joi.object({
    name: taskName.required(),
    idUser: idUser.required(),
    completed: completed.required()
})

const updateTaskSchema = Joi.object({
    name: taskName,
    idUser: idUser,
    completed: completed
})

const deleteTaskSchema = Joi.object({
  id: id.required()
})

module.exports = { createTaskSchema, updateTaskSchema, deleteTaskSchema };
