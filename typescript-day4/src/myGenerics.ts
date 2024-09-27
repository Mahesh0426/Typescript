const score: Array<number> = [];
const names: Array<string> = [];

function identity1(val: boolean | number): boolean | number {
  return val;
}
function identity2(val: any): any {
  return val;
}
function identity3<Type>(val: Type): Type {
  return val;
}
// identity3(3)

function identity4<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}
identity4<Bootle>({
  brand: "apple",
  type: 5,
});

// function getSearchProduct<T>(product:T[]):T{
//     // do dome database operations
//     const query = 3
//     return product[query]
// }
const getSearchProduct = <T>(product: T[]): T => {
  // do dome database operations
  const query = 3;
  return product[query];
};

interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  authoe: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}

function anotherFunation<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
console.log(anotherFunation(3, "4"));
