const Employee = require('../lib/Employee');
const employee = new Employee("John", '6446', 'thisthat@gmail.com');

test ("Can instantiate Employee instance", () => {
    expect(typeof(employee.name)).toBe('john');
    expect(typeof(employee.id)).toBe('6446');
    expect(typeof(employee.email)).toBe('thisthat@gmail.com');
});

test("Can get name via getName()", () => {
    expect(employee.getName()).toBe('john');
});

test("Can get id via getId()", () => {
    expect(employee.getId()).toBe('6446');
});

test("Can get email via getEmail()", () => {
    expect(employee.getEmail()).toBe('thisthat@gmail.com');
});