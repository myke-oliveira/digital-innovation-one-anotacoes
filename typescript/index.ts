interface IDog {
  name: string;
  age: number;
  favoritePark?: string;
}

class Dog implements IDog {

  readonly name: string;
  age: number;
  favoritePark?: string;

  constructor(name: string, age: number) {
    this.name = name,
    this.age = age
  }
}

const dog = new Dog('Apollo', 14)

console.log(dog);
