myPenguin.favoriteFoods=["krills","fish","squid"];
console.log(myPenguin.favoriteFoods[1]);
let firstFavFood=myPenguin.favoriteFoods[0];
myPenguin.favoriteFoods[length-1]="mullets";
console.log(myPenguin.favoriteFoods["length"]);/*or myPenguin.favoriteFoods.length;  */
myPenguin.favoriteFoods.pop();
myPenguin.favoriteFoods.push("pineapple");
var lastFavFood=myPenguin.favoriteFoods[length-1];

for (let i=0;i<myPenguin.favoriteFoods["length"];i++){
    console.log(myPenguin.favoriteFoods[i]);
}