let score:number | string=33;

score=45

score="55";

type User={
  name:string,
  id:number
}

type Admin={
  userName:string,
  id:number
}

let kashif:User | Admin={name:"Kashif", id:334};

kashif={userName:"kashifff",id:334}

// function getDBId(id:number | string){
//   console.log(`Db id is ${id}`)
// }

getDBId(5)
getDBId("3")

function getDBId(id:number | string){
 if (typeof id==="string") {
   id.toLowerCase();
 }

}


// array
 const data:number[]=[1,2,3];
 const data2:string[]=["1","2","3"];
 let data3:number[] | string[]=[1,2,3];

 data3=["1","2","3"];

 const data4:(number | string | boolean)[]=[1,2,"3",false];


 let seatAllotment:"aisle" | "middle" | "window";

 seatAllotment="aisle";
//  seatAllotment="crew"; error