const myObject = (function () {
function Person(firstname, lastname, age) {
    if (!(this instanceof Person)) {
        return new Person(firstname, lastname, age);
    }

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

var person = new Person('Annie', 'Versaire', 23);
var person2 = new Person('Vincent', 'Time', 21);
var person3 = new Person('Jean', 'Aimarre', 34);

const nbPerson = 3;
const moyenneDesAges = (person.age + person2.age + person3.age) / nbPerson;

console.log(`Inside : La moyenne des ages est : ${moyenneDesAges} pour ${nbPerson} personnes.`);

return {nbPerson, moyenneDesAges};
}());


console.log(`Outside : La moyenne des ages est : ${myObject.moyenneDesAges} pour ${myObject.nbPerson} personnes.`);
