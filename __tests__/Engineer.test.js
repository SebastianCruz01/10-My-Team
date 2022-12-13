const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Tom", '9920', 'tom@gmail.com', 'tomm123');

test ('test if we can get the constructer values for the engineer', () => {
    expect(engineer.name).toBe('Tom');
    expect(engineer.id).toBe('9920');
    expect(engineer.email).toBe('tom@gmail.com');
    expect(engineer.github).toBe('tomm123');
});

test ('test if we can get the name of the engineer', () => {
    expect(engineer.getName()).toBe('Tom');
});

test ('test if we can get the id of the engineer', () => {
    expect(engineer.getId()).toBe('9920');
});

test ('test if we can get the email of the engineer', () => {
    expect(engineer.getEmail()).toBe('tom@gmail.com');
});

test ('test if we can get the github of the engineer', () => {
    expect(engineer.getGithub()).toBe('tomm123');
}   );
test ('test if we can get the role of the engineer', () => {
    expect(engineer.getRole()).toBe('Engineer');
});