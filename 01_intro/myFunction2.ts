function addTwo(num:number):number {
  
  // return num+2;
  // return "Kashif";
  return num+2;
}

// function getValue(myVal:number):boolean{
//   if (myVal>5) {
//     return true;
//   }

//   return "200 OK";
// }


const getHello=(s:string):string=>{
  return ""
}

const heros=["thor","spiderman","ironman"];
// const heros=[1,"2",3];

heros.map((hero):string=>{
  return `hero is a ${hero}`
})

function consoleError(errmsg:string):void{
  console.log(errmsg)
}

function handleError(errmsg:string):never{
 throw new Error(errmsg)
}

addTwo(5);

export {}