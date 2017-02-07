export class Model{
    constructor(name){
        this.name = name;
    }

    call(){
        console.log('this model\'s name is : ' + this.name);
    }
}
