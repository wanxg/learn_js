var i = 10;
var j = "hello";
var k = true;
var l = undefined;
var m = null;

console.log(typeof i);
console.log(typeof j);
console.log(typeof k);
console.log(typeof l);
console.log(typeof m);


var array=[1,2,3,4,5,"hello",,false,undefined,null];

console.log("array is a " + typeof array);
console.log("array is " + array);
console.log("array[6] is " + array[6]);
console.log("size of the array is " + array.length);

console.log("size now is " + array.push("world"));
console.log("array is " + array);

console.log(array.pop() + " is poped out");
console.log("array is " + array);


array.forEach(function(item,index){
    console.log("array["+index+"] is " + item);
});