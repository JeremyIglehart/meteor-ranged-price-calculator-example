if (Products.find().count() === 0) {
  var adminId = Accounts.createUser({
    profile: {
      name: "Administrator"
    },
    username: "admin",
    email: "admin@admin.com",
    password: "123456"
  });
  var product1Id = Products.insert({
    name: "Oranges",
    quantity: 8000,
    price: [
      {
        min: 0,
        max: 0,
        price: 0.5
      }
    ]
  });
  var product2Id = Products.insert({
    name: "Apples",
    quantity: 100000,
    price: [
      {
        min: 1,
        max: 100,
        price: 1
      },
      {
        min: 101,
        max: 500,
        price: 0.5
      },
      {
        min: 500,
        max: 2000,
        price: 0.2
      }
    ]
  });
}