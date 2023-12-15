interface User {
    readonly dbId:number,
    userId:number,
    name:string,
    email:string,
    googleId?:string,
    startTrial():string,
    getCoupon(couponname:string,value:number):number
}

const jitin:User = {
    dbId:333,
    userId:343,
    name:"jitin",
    email:'jitin@jitin.com',
    startTrial:()=>{
        return "startted trial"
    },
    getCoupon:(name:"jitin10", offer:10)=> {
        return 10
    },
}

//jitin.dbId = 333;//error because it is a readonly