Products = new orion.collection('products', {
  singularName: 'product',
  pluralName: 'products',
  link: {
    title: 'Products' 
  },
  tabular: {
    columns: [
      { 
        data: "name", 
        title: "Name" 
      },{ 
        data: "quantity", 
        title: "Quantity" 
      }
    ]
  }
});