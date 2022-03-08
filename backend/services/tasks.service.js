const faker = require('faker');
const boom = require('@hapi/boom');

class tasksService {
  constructor() {
    this.tasks = [];
    this.generate();
  }

  async generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.tasks.push({
        id: i,
        taskName: faker.random.word(),
        idUser: faker.datatype.uuid(),
        completed: faker.random.boolean(),
      });
    }
  }

  async getAll(){
    const allTasks = this.tasks;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(allTasks);
      },1000);
    });
  }

  async getOne(id){
    const task = this.tasks.find(task => task.id === parseInt(id));
    if (!task){
      throw boom.notFound(`Task with id ${id} doesn't found`)
    }else {
        return task;
     }
  }

  async create(data){
    const newtask = data;
    this.tasks.push(newtask);

    return newtask;
  }

  async update(id, changes){
    const index = this.tasks.findIndex(task => task.id === parseInt(id));
    const task = this.tasks[index];
    this.tasks[index] = {
      ...task,
      ...changes
    };
    return this.tasks[index];
  }

  async delete(id){
    const index = this.tasks.findIndex(task => task.id === parseInt(id));
    if (index === -1) {
      throw boom.notFound(`Task with id ${id} doesn't found`);
    }
    this.tasks.splice(index, 1);
    return { id };
  }

}


module.exports = tasksService;
