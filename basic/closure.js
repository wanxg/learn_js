var a = 10;

var fn = function () {
    var b = 6;
    console.log(a + b);

}

//setTimeout(fn, 1000);

a++;

console.log(a);


/**
 *  Module pattern
 * 
 */
function createPerson() {

    var age;
    var firstName;
    var lastName;
    var sex;

    var person = {

        getAge: function () {

            if (age === undefined)
                return 38;
            else
                return age;
        },

        setAge: function (_age) {
            age = _age;
        },

        getFirstName: function () {
            return firstName;
        }

    };

    return person;
}

var person = createPerson();


console.log(person.getAge());
person.setAge(40);
console.log(person.getAge());

//--------------------------------------------------------


var i;

for(i = 0 ; i<10; i++){
    setTimeout(
        function(i){
            console.log(i);
        },1000,i);
}




