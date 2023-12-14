let score:number = 33;
score = 35;//accept
//score = "ncvj";//not correct because numbers only


let score1:number|string = 33;
score1 = 88;//its number
score1 = "xcxcX";//string

type User = {
    name:string;
    id:number
}

type Admin = {
    username:string;
    id:number
}

let jitin:User|Admin = {name:"jitin user",id:1711}

jitin = {username:"jitin admin",id:1711}


//arrays

const data1:number[] = [1,2,3];//array of numbers only
const data2:string[] = ["a","b","c"];//array of strings only
const data3:(string|number)[]=[1,"a",2,3,"b","c"];//array of both string and nuymber
const data4:(string|number|boolean)[]=[1,"b",true];//array of srting,number,boolean values


//literal type

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";//allow
//seatAllotment = "crew";// not allow