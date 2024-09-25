let score: number | string = 333;
score = "score is 333";
score = 333;

// Union type for different types
type Users = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let mahesh: Users | Admin = {
  name: "Mahesh",
  id: 1,
};

//change name  and id to something
mahesh = {
  username: "admin",
  id: 2,
};
console.log(mahesh);

// Function with Union Type
function getDBId(id: number | string) {
  //Here we can use any database method to fetch the id based on the type of id provided.
  console.log(`getDBId: ${id}`);
}
getDBId(3);
getDBId("3");

// Function with Union Type with manipuluation
function getsDBId(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
  } else {
    return id + 1;
  }

  console.log(`getsDBId: ${id}`);
}

getsDBId("ramesh");
getsDBId(4);

// array with union type
const data: number[] = [1, 2, 3];
const data2: string[] = ["thor", "ironman", "hulk"];
// do not mix match number or string either number or string like below althouth it allow
const data3: (number | string)[] = [1, "hello", 42, "world"];

data.push(4);
console.log(` new data is ${data}`);
console.log(`mix data: ${data3}`);

let seat: "aisle" | "middle" | "window";

seat = "aisle";
console.log(`now the seat is ${seat}`);
