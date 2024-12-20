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

// private not access outside the block
class User {
  readonly city: string = "Jamshedpur";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}
}

const kashif = new User("k@gmail.com", "Kashif", "123422");

kashif.name = "Aman";

export {};
