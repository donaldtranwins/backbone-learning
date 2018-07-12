var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomPinkRoses.jpg",
  link: "heirloomRose"
});

var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses, heirloomRoses
]);

//flowerGroup is the collection (array of models) created in the last chapter
var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});

//the view builds itself using render, which invokes the addFlower method
// the addFlower method builds each model and renders all of it to an element
// the built element is stored in the view, and is referenced by .el
// the .html renders the element of elements that have been rendered
$("#allFlowers").html(flowerGroupView.render().el);