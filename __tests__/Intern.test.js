const Intern = require("../lib/Intern");
const intern = new Intern("Clementine", '0010', 'Email@gog.com', 'Jersey');

test ('test if we can get the constructer values for the intern', () => {
    expect(intern.name).toBe('Clementine');
    expect(intern.id).toBe('0010');
    expect(intern.email).toBe('Email@gog.com');
    expect(intern.school).toBe('Jersey');
});

test ('test if we can get the name of the intern', () => {
    expect(intern.getName()).toBe('Clementine');
});

test ('test if we can get the id of the intern', () => {
    expect(intern.getId()).toBe('0010');
});

test ('test if we can get the email of the intern', () => {
    expect(intern.getEmail()).toBe('Email@gog.com');
});

test ('test if we can get the school of the intern', () => {
    expect(intern.getSchool()).toBe('Jersey');
});

test ('test if we can get the role of the intern', () => {
    expect(intern.getRole()).toBe('Intern');
});
