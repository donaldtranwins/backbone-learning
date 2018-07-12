// Namespace our flowerApp
var app = app || {};

// The view for all the flowers
app.allFlowersView = Backbone.View.extend({

    tagName: "section",

    render: function() {
        //.each is a backbone function, .addFlower is a custom function.  param this is needed for context
        this.collection.each(this.addFlower, this);

        //merely added so this can be chained
        return this;
    },

    addFlower: function(flower) {
        //new view is instantiated by passing in the model
        var flowerView = new app.singleFlowerView ({ model: flower });
        //the view builds itself using render, triggering the addFlower method and gets the element returned.  that rendered element is appended to the target element
        this.$el.append(flowerView.render().el);
    }


});