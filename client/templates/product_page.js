Template.productPage.onRendered(function() {
  import '/imports/products.css'
  Session.set('price', 0);
});

Template.productPage.helpers({
  overallCost() {
    return Session.get('price');
  }
});

Template.productPage.events({
  'keyup #quantity': function(event, template) {

    let quantity = event.currentTarget.value,
        multiplierPrice,
        overallCost;

    if (quantity === "" || quantity === "0")
      quantity = 0;

    quantity = numeral(quantity);

    var isBetween = function (num, a, b) {
        var min = Math.min.apply(Math, [a,b]),
            max = Math.max.apply(Math, [a,b]);
        return num >= min && num <= max;
    };

    var getMaxPriceForRange = function(number, priceObj) {
      console.log("Number", number)

      let returnPrice = null,
          lowest = {min: null, price: null},
          highest = {max: null, price: null};

      let priceArray = priceObj.map(function(priceElement) {

        console.log("priceElement", priceElement, "isBetween:", isBetween(number, priceElement.min, priceElement.max));

        if (lowest.min > priceElement.min || lowest.min === null) {
          lowest.min = priceElement.min;
          lowest.price = priceElement.price;
        }

        if (highest.max < priceElement.max || highest.max === null) {
          highest.max = priceElement.max;
          highest.price = priceElement.price;
        }

        if (isBetween(number, priceElement.min, priceElement.max)) {
          return Number(priceElement.price);
        }

      });

      console.log(lowest, highest);

      if (number < lowest.min){
        returnPrice = lowest.price;
      } else if (number > highest.max) {
        returnPrice = highest.price;
      } else {
        returnPrice = Math.max.apply(null, priceArray.filter(Number));
      }

      return returnPrice;
    }

    multiplierPrice = getMaxPriceForRange(quantity, template.data.price);
    overallCost = (quantity * multiplierPrice);

    console.log("Max Price For Range:", getMaxPriceForRange(quantity, template.data.price));
    Session.set('price', overallCost);
  }
});