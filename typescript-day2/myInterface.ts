interface User1 {
  _id: number;
  name: string;
  startTrial(): string;
  getCoupen(coupenName: string, value: number): void;
}

// re-open the interface
interface User1 {
  email: string;
}

//inheritance user1 to admin interface
interface Admin extends User1 {
  role: string;
}

// creating object of admin interface
const Mahesh: Admin = {
  _id: 1,
  name: "Mahesh",
  email: "mahesh@gmail.com",
  role: "admin",

  startTrial: () => {
    console.log("startTrial method is called");
    return "welcome to my trial you will get discount";
  },
  getCoupen: (coupenName: "Mahesh06", Discount: 15) => {
    console.log(`Coupon ${coupenName} applied with ${Discount}% discount`);
  },
};

console.log(Mahesh);
console.log(Mahesh.startTrial());
Mahesh.getCoupen("Mahesh06", 20);
