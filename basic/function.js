//"use strict";

var myFunc1 = function (i,j){
    global1 = 10;
    console.log(arguments[0]);
    console.log(arguments[1]);
    return i+j;
}

var myFunc2 = function (m,n){
    global2 = 20;
    return m+','+n;
}

// Function as method argument
function executor(a,b){
    global3 = 30;
    console.log("sum of 4 and 5 is " + a(4,5));
    console.log(b("hello","world"));

}

// Function is a type
console.log("myFunc is a " + typeof myFunc1);

executor(myFunc1,myFunc2);

//IIFE - Immediately Invoked Function Expression
(function(name){
    console.log("Hi there,"+name);


    // if using "use strict", an error will happen
    console.log(`Printing global variable defined in other function:  ${global1}`);
    console.log(`Printing global variable defined in other function:  ${global2}`);
    console.log(`Printing global variable defined in other function:  ${global3}`);

})("Xiaolong");


function myFunc3(){

    console.log(this);
}

//myFunc3();  -> this refers to the global object of node.js
myFunc3.call({msg:'I am a object refered by \'this\''});