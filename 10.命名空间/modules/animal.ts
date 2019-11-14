namespace A {
  interface Animal{
    name: string;
    eat(): void;
  }

  export class Dog implements Animal{
    name: string;
    constructor(name: string) {
      this.name = name
    }

    eat() {
      console.log(`${this.name}吃狗粮A`)
    }
  }

}

namespace B{
  interface Animal {
    name: string;
    eat(): void;
  }

  export class Dog implements Animal{
    name: string;
    constructor(name: string) {
      this.name = name
    }

    eat(): void {
      console.log(`${this.name}吃狗粮B`)
    }

  }
}

export {
  A, B
}
