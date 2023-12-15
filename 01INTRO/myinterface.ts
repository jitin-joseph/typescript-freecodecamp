interface User {
    readonly dbId:number,
    userId:number,
    name:string,
    email:string,
    googleId?:string,
    startTrial():string,
    getCoupon(couponname:string,value:number):number
}

//we can also reopen interface to add more items later on

interface User{
    githubToken : string
}


interface Admin extends User{

    role:"admin"|"TA"|"Learner"
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
    githubToken:"sdsdsaf423423423"
}



//jitin.dbId = 333;//error because it is a readonly


const jitinAdmin:Admin = {
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
    githubToken:"sdsdsaf423423423",
    role:"admin"
}


