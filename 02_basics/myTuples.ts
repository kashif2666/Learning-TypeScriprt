// tuples: It is a specific type of array where length and datatype at specific position of array is fixed.

let user:[string,number,boolean];

user=["kashif",1,true];


let rgb:[number,number,number];
rgb=[255,255,255];

type User2=[number,string];

const newUser:User2=[112,"k@gmail.com"];

newUser[1]="a@gmail.com";

newUser.push(true);

console.log(newUser);

export {}