const Engineer = require('../lib/Engineer');

describe('employee', () => 
{
    it('should return the name: a, id: b, email: c, github: d, role: Engineer', () => 
    {
      expect(new Engineer('a', 'b', 'c', 'd')).toEqual({name:'a',id:'b',email:'c', github: 'd', role:'Engineer'});
    });
});