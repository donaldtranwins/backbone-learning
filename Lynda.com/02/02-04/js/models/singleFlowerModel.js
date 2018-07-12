// Namespace our app
var app = app || {};

//extend model from backbone to a variable
app.Flower = Backbone.Model.extend({

    //set defaults
    defaults: {
        name: 'Flower',
        color: 'pink',
        price: 9.99,
        img: "images/placeholder.jpg"
    },

    //add initialize functions
    initialize: function () {
        console.log("A "+ this.get('color') +' '+ this.get('name') +' has been added at '+ this.get('price'));

        this.on('change', function(){
            console.warn(this.get('name') +' has changed', arguments);
            console.log(this.toJSON());


            var CHANGED = arguments[0].changed;
            for (var changes in CHANGED){
                if (CHANGED.hasOwnProperty(changes)) {
                    console.log(this.get('name') + ' had a change: ' + changes + ': ' + CHANGED[changes]);
                }
            }
        });

    }

});