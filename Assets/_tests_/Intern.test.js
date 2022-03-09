const Intern = require('../lib/Intern');

describe('employee', () => 
{
    it('should return the name: a, id: b, email: c, school: d, role: Intern', () => 
    {
      expect(new Intern('a', 'b', 'c', 'd')).toEqual({name:'a',id:'b',email:'c', school: 'd', role:'Intern'});
    });
});