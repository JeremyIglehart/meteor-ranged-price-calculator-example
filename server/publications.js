Meteor.publish('products', function() {
  Meteor._sleepForMs(2000); // Simulate Slow Publication
  return Products.find();
});