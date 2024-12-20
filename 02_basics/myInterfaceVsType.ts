// differece of Type and Interface
// 1. interface is reopening
// 2. interface have inheritance property like extends

interface User2 {
  readonly dbId:number,
  email:string,
  userId:number,
  googleId?:string,
  // startTrail:()=>string
  startTrail():string,
  getCoupon(couponname:string, value:number):number
}

// reopening
interface User2{
  githubToken:string
}

// inheritance
interface Admin extends User2{
  role:"admin"|"ta"|"learner"
}

const kashif2:User2={
  dbId:22,
  email:"kashif@gmail.com",
  userId:2211,
  githubToken:"github",
  startTrail:()=>{
    return "trail started"
  },
  getCoupon:(name:"Kashif", off:10)=>{
    return 5
  }
}

const kashif3:Admin={
  dbId:22,
  email:"kashif@gmail.com",
  userId:2211,
  role:"learner",
  githubToken:"github",
  startTrail:()=>{
    return "trail started"
  },
  getCoupon:(name:"Kashif", off:10)=>{
    return 5
  }
}

kashif2.email="aman@gmail.com";
// kashif2.dbId=2541; error

export {}