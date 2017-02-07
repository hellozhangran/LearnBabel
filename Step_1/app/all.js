class Model{
    constructor(name){
        this.name = name;
    }

    call(){
        console.log('this model\'s name is : ' + this.name);
    }
}


class Do extends Model{
    constructor(name){
        super(name);
    }
}


let go = new Do('zhangran');
go.call();
