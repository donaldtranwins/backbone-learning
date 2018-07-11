//name space our app
var app = app || {};

//extend a collection as singlemodels
app.Bouquet = Backbone.Collection.extend({

    //reference the model that is a part of the collection
    model: app.Flower
});

