//ES6
//global variable
const array = [1, 2, 3, 4, 5]
for (let index = 0; index < array.length; index++) {
  console.log(index)
}

const getBook = (name, author) => {
  return {
    name,
    author
  }
}

console.log(getBook("harry poter", "JK"))

const list = { name: "Shopping list", items: ["Milk", "cow"] }
// deconstruction
const { name, items } = list

// spead 
console.log(...items)

// object

class Person {
  constructor(name, age, hairColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
  };
  sayName() {
    console.log(`My name is ${this.name}`)
  }
}


class Wizard extends Person {
  constructor(name, age, hairColor, level, skills) {
    super(name, age, hairColor);
    this.level = level;
    this.skills = skills;
  }
}

const HarryPoter = new Wizard("Harry Poter", 20, "Brown", 20, "sleep")
HarryPoter.sayName()

// async

const promise = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve({ data: "successed" })

  } else {
    reject({ error: "falied" })
  }
});

promise.then(data => console.log(data.data)).catch(err => console.log(err.error))