interface User2 {
  readonly dbId:number,
  email:string,
  userId:number,
  googleId?:string,
  // startTrail:()=>string
  startTrail():string
}

const kashif2:User2={
  dbId:22,
  email:"kashif@gmail.com",
  userId:2211,
  startTrail:()=>{
    return "Kashif"
  }
}

kashif2.email="aman@gmail.com";
// kashif2.dbId=2541; error