var person = {
    age: 38,
    sex: "male",
    name: "Xiaolong",
    address: 
        {
        street:"Richard-Breitenfeld-Str.",
        zip:60438,
        city:"Frankfurt am Main"
    },
    
    print: function(){

        console.log(this.name + " is a " + this.age + " years old " + this.sex + ", lives in " + 
                    this.address.street + " of " + this.address.city);
    },

    isFromFrankfurt: function(city){
        return this.address.city === city;
    }

};

console.log(typeof person);
console.log(person);

//delete person.sex;

person.print();

console.log(person.isFromFrankfurt('Frankfurt am Main'));