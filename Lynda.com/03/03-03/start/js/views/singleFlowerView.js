// Namespace our flowerApp
var app = app || {};

app.singleFlowerView = Backbone.View.extend({

  tagName: "article",
  className: "flowerListItem",

    //tells the View.template where to get the HTML template
    template: _.template( $("#flowerElement").html() ),

    render: function() {
        //grab data from the model to be rendered in a template by the view
        var flowerTemplate = this.template(this.model.toJSON());
        //takes the $el created, the one specified in line 6/7 with tagName and className, and pass in a template
        this.$el.html(flowerTemplate);
        return this;
    }


});