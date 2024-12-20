const User={
  name:"Kashif",
  email:"kashif@gmail.com",
  isActive:true
}

function createUser({name:string,isPaid:boolean}){

}

let newUser={name:"Kashif", isPaid:false, email:"Kashif@gmail.com"};

createUser(newUser);

function createCourse():{name:string,price:number}{
  return {name:"ReactJs", price:3000}
}

export {}