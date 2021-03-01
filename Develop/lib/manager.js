const Employee = require("./employee")

class Manager extends Employee {
    constructor (name, id, email, phone){
        super (name, id, email)
        this.phone = phone
        this.title = "Manager"
    }

    getRole(){
        return this.title;
    }

    getOfficeNumber(){
        return this.phone;
    }

}

module.exports = Manager

// const name = "matt"
// const id = 4
// const email = "myemail"
// const officeNumber = 65

// const matt = new Manager (name, id, email, officeNumber)
// console.log(matt)