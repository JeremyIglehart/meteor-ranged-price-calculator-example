Router.configure({
  layoutTemplate: 'app',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('products');
  }
});

Router.route('/', {
  name: 'products',
  data: function() {
    return {
      product: function() {
        return Products.find();
      }
    };
  }
});

Router.route('/products/:_id', {
  name: 'productPage',
  data: function() { return Products.findOne(this.params._id); }
});