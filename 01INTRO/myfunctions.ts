function addTwo(num:number):number{
    return num+2;
    
}

addTwo(4);


function getUpper(value:string){
    return value.toUpperCase();
}


getUpper("jitin");


function signUpUser(name:string,email:string,isPaid:boolean){

}

signUpUser("jitin","jitin@local.dev",true);


function loginUser(name:string,email:string,isPaid:boolean=false){//here provided false as default value

}

loginUser("jitin","jitin@local.dev");

const heros = ["thor","ironman","loki"];
//const heroes = [1,2,3];

heros.map(hero => {
    return `hero is ${hero}`;
})

export{}