class User{
  email:string;
  name:string;
  readonly city:string="Jamshedpur"
  constructor(email:string,name:string){
    this.email=email,
    this.name=name
  }
}

const kashif=new User("k@gmail.com","Kashif");
// kashif.city="Jamshedpur";
// kashif.city="Hyderabad";