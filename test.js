var Factory = function () {
    this.createPerson = function (firstName, lastName, age) {
        return {
                FirstName: firstName,
                LastName: lastName,
                Age: age
                };
            }

    this.createEmployee = function (firstName, lastName, employeeId) {
        return {
                FirstName: firstName,
                LastName: lastName,
                EmployeeId: employeeId
                };
            }
       
        
}

var factory = new Factory();

person1 = factory.createPerson("James", "Bond", 35);
person2 = factory.createPerson("Jason", "Bourne", 28);
person3 = factory.createPerson("Jack", "Bauer", 31);

console.log(person1);
console.log(person2);
console.log(person3);

emp1 = factory.createEmployee("James", "Bond", "1");
emp2 = factory.createEmployee("Jason", "Bourne", "2");
emp3 = factory.createEmployee("Jack", "Bauer", "3");

console.log(emp1);
console.log(emp2);
console.log(emp3);



