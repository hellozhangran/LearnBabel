"use strict";
let add = function(a,b){
    console.log(a+b);
}

let out = function(){
    let set = new Set();
    for(let i = 0; i < 10; i++){
        set.add('this is '+i );
    }

    for(let i of set){
        console.log(i);
    }
}

let destruct = ()=>{
    //解构赋值在node5上是不支持滴
    let [head, ...tail] = [1, 2, 3, 4];
    console.log(tail);
}

destruct();

//let first = (size, ...args) => [...args].slice(0, size);
