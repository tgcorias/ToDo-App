const faker = require('faker');
const boom = require('@hapi/boom');

class usersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  async generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.name.findName(),
      });
    }
  }

  async getAll(){
    const allUsers = this.users;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(allUsers);
      },1000);
    });
  }

  async getOne(id){
    const user = this.users.find(user => user.id === id);
    if(!user || id === -1){
      throw boom.notFound(`User with id ${id} not found`);
    } else {
      return user;
    }
  }

  async create(data){
    const newUser = data;
    this.users.push(newUser);

    return newUser;
  }

  async update(id, changes){
    const index = this.users.findIndex(user => user.id === id);
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  async delete(id){
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.users.splice(index, 1);
    return { id };
  }

}


module.exports = usersService;
