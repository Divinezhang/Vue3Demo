class Student {
  fullName: string
  constructor(public firstNamme, public middleInitial, public lastName) {
    this.fullName = firstNamme + ' ' + middleInitial + ' ' + lastName
  }
}



interface Person {
  firstName: string,
  lastName:string
}

function greeter(person: Person) {
  return 'Hello' + person.firstName + ' ' + person.lastName
}
// let user = 'TypeScript'
// let user = [1,2]
// let user = {
//   firstName: '你好',
//   lastName:'TypeScript'
// }
let user = new Student('你好','M','TypeScript')
document.body.innerHTML = greeter(user)