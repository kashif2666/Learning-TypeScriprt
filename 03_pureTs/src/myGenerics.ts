const score: Array<number> = [];
const names: Array<string> = [];

// here, I ahve to check whether it is boolean or number through if else typeof
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// not a good practice bcz parameter of number may give string return type
function identityTwo(val: any): any {
  return val;
}

// It is a generic bcz parameter lock the type and return the same type
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true);

// shorthand generic
function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({});

// Array generic and arrow function generics

function getSearchProducts<T>(products: T[]): T {
  // do some DB operation
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some DB operation
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U) {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, {});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
