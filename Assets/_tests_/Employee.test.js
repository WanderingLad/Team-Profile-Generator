const Employee = require("../lib/Employee")

describe('employee', () => 
{
    it('should return the name: a, id: b, email: c, role: Employee', () => 
    {
      expect(new Employee('a', 'b', 'c')).toEqual({name:'a',id:'b',email:'c', role:'Employee'});
    });
});