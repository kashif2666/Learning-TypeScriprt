"use strict";
// class User{
//   email:string;
//   name:string;
//   readonly city:string="Jamshedpur"
//   constructor(email:string,name:string){
//     this.email=email,
//     this.name=name
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const kashif=new User("k@gmail.com","Kashif");
// kashif.city="Jamshedpur";
// kashif.city="Hyderabad";
// private not access outside the block
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Jamshedpur";
    }
}
const kashif = new User("k@gmail.com", "Kashif", "123422");
kashif.name = "Aman";
