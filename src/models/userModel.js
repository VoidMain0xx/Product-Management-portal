
export default class userModel {
    constructor(id, name, email, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }

    static add(name , email , password){
        const newUser = new userModel(user.length+1 , name , email , password);
        user.push(newUser);
    }

    static isValid(email , password){
        const result = user.find((u) => u.email = email , u.password = password);
        return result;
    }

  }
  
  var user = []; 