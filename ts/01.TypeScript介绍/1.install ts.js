var Student = /** @class */ (function () {
    function Student(firstNamme, middleInitial, lastName) {
        this.firstNamme = firstNamme;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstNamme + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello' + person.firstName + ' ' + person.lastName;
}
// let user = 'TypeScript'
// let user = [1,2]
// let user = {
//   firstName: '你好',
//   lastName:'TypeScript'
// }
var user = new Student('你好', 'M', 'TypeScript');
document.body.innerHTML = greeter(user);
