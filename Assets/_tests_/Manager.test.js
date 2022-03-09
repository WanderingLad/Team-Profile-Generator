const Manager = require('../lib/Manager');

describe('employee', () => 
{
    it('should return the name: a, id: b, email: c, officeNumber: d,  role: Managerr', () => 
    {
      expect(new Manager('a', 'b', 'c', 'd')).toEqual({name:'a',id:'b',email:'c', officeNumber: 'd', role:'Manager'});
    });
});