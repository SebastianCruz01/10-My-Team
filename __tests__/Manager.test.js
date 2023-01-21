const Manager = require('../lib/Manager');
const manager = new Manager("Mammy", '0021','uKnowIt@may.com', '1234');  // officeNumber is the only new property

test ("Can instantiate Manager instance", () => {
    expect(manager.name).toBe('Mammy');
    expect(manager.id).toBe('0021');
    expect(manager.email).toBe('uKnowIt@may.com');
    expect(manager.officeNumber).toBe('1234');
});

test("Can get name via getName()", () => {
    expect(manager.getName()).toBe('Mammy');
});

test("Can get id via getId()", () => { 
    expect(manager.getId()).toBe('0021');
});

test("Can get email via getEmail()", () => {
    expect(manager.getEmail()).toBe('uKnowIt@may.com');
});
test ('test if we can get office number', () => {
    expect(manager.getOfficeNumber()).toBe('1234');
});
test("Can get role via getRole()", () => {
    expect(manager.getRole()).toBe('Manager');
});

