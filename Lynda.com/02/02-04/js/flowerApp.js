//create each flower from the model
//using new instantiates a new model with inherited properties/methods
var tulip = new app.Flower({
    name: "Tantalizing Tulip",
    color: "purple",
    price: 3.99
});

var fluery = new app.Flower({
    name: "Fleur-de-lis",
    color: "yellow",
    price: 3.50
});

//create a bouquet, aka collection of flowers
//using new instantiates a new collection (of models) with inherited properties/methods
var EuropeanFlowerGroup = new app.Bouquet([
    tulip, fluery
]);

//set data on a model using key, value
tulip.set('originCountry', 'Holland');

//set data on a model using {key1:value1, key2:value2}
fluery.set({originCountry: 'France', symbol: "Boy Scouts of America", color: 'blue'});

console.log(EuropeanFlowerGroup.toJSON());