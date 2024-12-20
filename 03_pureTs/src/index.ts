// class User{
//   email:string;
//   name:string;
//   readonly city:string="Jamshedpur"
//   constructor(email:string,name:string){
//     this.email=email,
//     this.name=name
//   }
// }

// const kashif=new User("k@gmail.com","Kashif");
// kashif.city="Jamshedpur";
// kashif.city="Hyderabad";

// private not access outside the block / class
// class User {
//   readonly city: string = "Jamshedpur";
//   constructor(
//     public email: string,
//     public name: string,
//     private userId: string
//   ) {}
//   private deleteToken() {
//     console.log("Token Deleted");
//   }
// }

// const kashif = new User("k@gmail.com", "Kashif", "123422");

// kashif.name = "Aman";
// kashif.deleteToken();  error

// getter and setter
// class User {
//   private _courseCount = 1;
//   readonly city: string = "Jamshedpur";
//   constructor(
//     public email: string,
//     public name: string
//   ) // private userId: string
//   {}

//   get getAppleEmail(): string {
//     return `apple ${this.email}`;
//   }

//   get courseCount(): number {
//     return this._courseCount;
//   }

//   // no return type in settter not even void
//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Course count should be more than 1");
//     }
//     this._courseCount = courseNum;
//   }
// }

// const kashif = new User("k@gmail.com", "Kashif", "123422");

// kashif.name = "Aman";

// protected the rule is same as private but the only difference is that protected is accessed by inheritance class i.e., through extends class
class User {
  protected _courseCount = 1;
  readonly city: string = "Jamshedpur";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const kashif = new User("k@gmail.com", "Kashif");

kashif.name = "Aman";

export {};
