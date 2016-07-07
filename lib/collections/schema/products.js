Products.attachSchema(new SimpleSchema({
  name: {
    type: String,
    optional: false,
    label: 'Product Name'
  },
  quantity: {
    type: String,
    optional: false,
  },
  price: {
    type: [Object],
    optional: false,
    label: 'Price',
  },
  "price.$.min": {
    type: Number,
    optional: false,
    label: 'Minimum'
  },
  "price.$.max": {
    type: Number,
    optional: false,
    label: 'Maximum'
  },
  "price.$.price": {
    type: Number,
    optional: false,
    label: 'Price',
    decimal: true
  }
}));