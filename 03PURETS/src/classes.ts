class User {
    name: string;
    email: string;
    isActive: boolean=false;
    readonly city:string="Kochi";
    constructor(email:string,name:string){
        this.email= email;
        this.name = name;
    }
}

const jitin = new User("jitin","j@j.com");
//jitin.city="Ernakulam";//allowed only if not readonly

