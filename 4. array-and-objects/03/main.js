let myPenguin = {
    characterName:"Pingu",
    origin:"Pingu",
    notes:"The title character of the series"
};

myPenguin.outfit={
    hat:"baseball-cap",
    shirt:"hawaiin-shirt",
    pants:"cargo-shorts",
    shoes:"flip-flops"
};


var penguinHatType=myPenguin.outfit.hat;


myPenguin.outfit.accessory="watch";


myPenguin.outfit.hat="top hat";


delete myPenguin.outfit.pants;

for(let keys in myPenguin.outfit){
    console.log(keys+':'+ myPenguin.outfit[keys]);
}
