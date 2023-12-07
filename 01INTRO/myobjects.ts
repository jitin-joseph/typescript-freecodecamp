type User = {
    readonly _id : string, //readonly
    name:string,
    email:string,
    isActive:boolean,
    creditCardNumber?:number // ? for optional
}


let myUser:User={
    _id : "123abc",
    name:"jitin",
    email:"j@j.com",
    isActive:false,
} 

//myUser._id = "34434";//will prevent as it is readonly
myUser.email ="j1@j1.com";

export{}