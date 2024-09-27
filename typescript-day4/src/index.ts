// class User {
//   email: string;
//   name: string;
//   constructor(email: string, name: string) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mahesh = new User("mahesh", "mahesh@gmail.com");
// console.log(mahesh);

class User {
  protected _count = 3;
  readonly city: string = "netown";
  constructor(
    private userID: string,
    public name: string,
    public email: string
  ) {}

  //private method
  private generateToken() {
    console.log("generating token..");
  }
  //getter method
  get getAppleEmaily(): string {
    return ` apple${this.city}`;
  }
  //getter method
  get courseCount(): number {
    return this._count;
  }
  //setter method
  set courseCount(courseNum) {
    if (courseNum >= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this._count = courseNum;
  }
}
//inheritance
class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._count = 2;
  }
}

const mahesh = new User("1234", "mahesh", "mahesh@gmail.com");
// mahesh.generateToken()
console.log(mahesh);

const subMahesh = new subUser("5678", "subMahesh", "subMahesh@gmail.com");
console.log(subMahesh);
