const Employee = require('./Employee');

    class Manager extends Employee {
  constructor(name, id, email, officeNumber) { // officeNumber is the only new property
    super(name, id, email);                    // call the parent constructor here
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;