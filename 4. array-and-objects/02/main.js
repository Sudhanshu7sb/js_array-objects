
var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

var penguins=[gunter,ramon,fred];

for (let keys in penguins[0]){
    console.log(penguins[0][keys]);
}

var secondPenguin=penguins[1];

console.log(penguins[penguins.length-1]["name"]);

let myPenguin = {
    characterName:"Pingu",
    origin:"Pingu",
    notes:"The title character of the series"
};
penguins.push(myPenguin);

penguins.length;

penguins[0]["canFly"]="true";

penguins[0].sayHello();

for (let i=0;i<penguins.length;i++){
    console.log(penguins[i].name);
}

for (let i=0;i<penguins.length;i++){
    console.log(penguins[i].sayHello());
}

for (let i=0;i<penguins.length;i++){
 penguins[i].numberofFeet=2;
}


for (let i=0;i<penguins.length;i++){
    if(penguins[i].canFly== 'true'){
        console.log(penguins[i].name +' '+ 'can fly!');
    }

}