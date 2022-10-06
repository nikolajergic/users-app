class UserService {
  
    constructor () {
        this.users = [];
        this.nextId = 0;
    }

    getAll() {
        return this.users;
    }

    handleDelete(id) {
        const index = this.user.findIndex((user) => user.id === id);

        if (index === -1) {
        return false;
        }

        this.user.splice(index, 1);

        return true
    }

    addUser(newUser) {
      for (const user of this.users) {
          if (user.username === newUser.username) {
              throw new Error('username exists');
          }
      }
      
      this.users.push({id: this.nextId, ...newUser});

      this.nextId++;

      return this.users[this.users.length-1];
    }

    Edit() {

    }

    

}

export default new UserService();