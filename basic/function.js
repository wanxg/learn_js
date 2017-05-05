var myFunc1 = function (i,j){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return i+j;
}

var myFunc2 = function (m,n){

    return m+','+n;
}

function executor(a,b){

    console.log("sum of 4 and 5 is " + a(4,5));
    console.log(b("hello","world"));

}



//console.log(myFunc1(4,5));

//console.log(myFunc2("hello","world"));

console.log("myFunc is a " + typeof myFunc1);

executor(myFunc1,myFunc2);
