type User={
  readonly _id:string
  name:string,
  email:string,
  isActive:boolean,
  creditcardDetails?:number
}

let myUser:User={
_id:"1234",
name:"Kashif",
email:"Kashif@gamil.com",
isActive:false
}

myUser.name="Aman";
// myUser._id="123"

type cardNumber={
  cardnumber:string
}

type cardDate={
  cardDate:string
}

type cardDetails=cardNumber & cardDate & {
  cvv:number
}

export {}