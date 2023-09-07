export const menuItems = [
  {
    id: 1,
    type: "Drinks",
    category: "Hot Coffees",
    subCategories: [
      {
        name: "Brewed Coffees",
        items: [
          {
            img: require("../images/filtered.png"),
            name: "Dark Roast",
            sizeOptions: [
              { name: "Short", quantity: "236ml", icon: "short" },
              { name: "Tall", quantity: "354ml", icon: "tall" },
              { name: "Grande", quantity: "473ml", icon: "grande" },
              { name: "Venti", quantity: "591ml", icon: "venti" },
            ],
            included: [
              {
                modification: "Milk Foam",
                choices: [
                  "No Milk Foam",
                  "Light Milk Foam",
                  "Milk Foam",
                  "Extra Milk Foam",
                ],
              },
              {
                modification: "Milk Options",
                choices: [
                  "2% Milk",
                  "Whole Milk",
                  "Breve (Half & Half)",
                  "Coconut Beverage",
                ],
              },
              {
                modification: "Milk Temperature",
                choices: ["Extra Hot", "Steamed Hot", "Warm"],
              },
            ],
            description:
              "This full bodied coffee is rich and smooth with a hint of chocolate and caramel. It is a great choice for those who like a strong coffee.",
            nutricionalInfo: "110 Calories, 10g sugar, 4.0g fat",
          },
          {
            img: require("../images/cappuccino.png"),
            name: "Cappuccino",
            sizeOptions: [
              { name: "Short", quantity: "236ml", icon: "short" },
              { name: "Tall", quantity: "354ml", icon: "tall" },
              { name: "Grande", quantity: "473ml", icon: "grande" },
              { name: "Venti", quantity: "591ml", icon: "venti" },
            ],
            included: [
              {
                modification: "Milk Foam",
                choices: [
                  "No Milk Foam",
                  "Light Milk Foam",
                  "Milk Foam",
                  "Extra Milk Foam",
                ],
              },
              {
                modification: "Milk Options",
                choices: [
                  "2% Milk",
                  "Whole Milk",
                  "Breve (Half & Half)",
                  "Coconut Beverage",
                ],
              },
              {
                modification: "Milk Temperature",
                choices: ["Extra Hot", "Steamed Hot", "Warm"],
              },
            ],
            description:
              "This full bodied coffee is rich and smooth with a hint of chocolate and caramel. It is a great choice for those who like a strong coffee.",
            nutricionalInfo: "110 Calories, 10g sugar, 4.0g fat",
          },
          {
            img: require("../images/expresso.png"),
            name: "Expresso",
            sizeOptions: [
              { name: "Short", quantity: "236ml", icon: "short" },
              { name: "Tall", quantity: "354ml", icon: "tall" },
              { name: "Grande", quantity: "473ml", icon: "grande" },
              { name: "Venti", quantity: "591ml", icon: "venti" },
            ],
            included: [
              {
                modification: "Milk Foam",
                choices: [
                  "No Milk Foam",
                  "Light Milk Foam",
                  "Milk Foam",
                  "Extra Milk Foam",
                ],
              },
              {
                modification: "Milk Options",
                choices: [
                  "2% Milk",
                  "Whole Milk",
                  "Breve (Half & Half)",
                  "Coconut Beverage",
                ],
              },
              {
                modification: "Milk Temperature",
                choices: ["Extra Hot", "Steamed Hot", "Warm"],
              },
            ],
            description:
              "This full bodied coffee is rich and smooth with a hint of chocolate and caramel. It is a great choice for those who like a strong coffee.",
            nutricionalInfo: "110 Calories, 10g sugar, 4.0g fat",
          },
          {
            img: require("../images/mocha.png"),
            name: "Caffe Mocha",
            sizeOptions: [
              { name: "Short", quantity: "236ml", icon: "short" },
              { name: "Tall", quantity: "354ml", icon: "tall" },
              { name: "Grande", quantity: "473ml", icon: "grande" },
              { name: "Venti", quantity: "591ml", icon: "venti" },
            ],
            included: [
              {
                modification: "Milk Foam",
                choices: [
                  "No Milk Foam",
                  "Light Milk Foam",
                  "Milk Foam",
                  "Extra Milk Foam",
                ],
              },
              {
                modification: "Milk Options",
                choices: [
                  "2% Milk",
                  "Whole Milk",
                  "Breve (Half & Half)",
                  "Coconut Beverage",
                ],
              },
              {
                modification: "Milk Temperature",
                choices: ["Extra Hot", "Steamed Hot", "Warm"],
              },
            ],
            description:
              "This full bodied coffee is rich and smooth with a hint of chocolate and caramel. It is a great choice for those who like a strong coffee.",
            nutricionalInfo: "110 Calories, 10g sugar, 4.0g fat",
          },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
            sizeOptions: [
              { name: "Short", quantity: "236ml", icon: "short" },
              { name: "Tall", quantity: "354ml", icon: "tall" },
              { name: "Grande", quantity: "473ml", icon: "grande" },
              { name: "Venti", quantity: "591ml", icon: "venti" },
            ],
            included: [
              {
                modification: "Milk Foam",
                choices: [
                  "No Milk Foam",
                  "Light Milk Foam",
                  "Milk Foam",
                  "Extra Milk Foam",
                ],
              },
              {
                modification: "Milk Options",
                choices: [
                  "2% Milk",
                  "Whole Milk",
                  "Breve (Half & Half)",
                  "Coconut Beverage",
                ],
              },
              {
                modification: "Milk Temperature",
                choices: ["Extra Hot", "Steamed Hot", "Warm"],
              },
            ],
            description:
              "This full bodied coffee is rich and smooth with a hint of chocolate and caramel. It is a great choice for those who like a strong coffee.",
            nutricionalInfo: "110 Calories, 10g sugar, 4.0g fat",
          },
        ],
      },
      {
        name: "Americanos",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Cappuccinos",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
      {
        name: "Expresso Shots",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: "Drinks",
    category: "Hot Teas",
    subCategories: [
      {
        name: "Chai Teas",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Black Teas",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Green Teas",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
      {
        name: "Herbal Teas",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: "Drinks",
    category: "Iced Drinks",
    subCategories: [
      {
        name: "Chai Teas",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Black Teas",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Green Teas",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
      {
        name: "Herbal Teas",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: "Food",
    category: "Hot Breakfast",
    subCategories: [
      {
        name: "Breakfast Sandwiches",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Breakfast Wraps",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Sous Vide Egg bites",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    type: "Food",
    category: "Bakery",
    subCategories: [
      {
        name: "Breakfast Sandwiches",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Breakfast Wraps",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Sous Vide Egg bites",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    type: "Food",
    category: "Lunch",
    subCategories: [
      {
        name: "Breakfast Sandwiches",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Breakfast Wraps",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Sous Vide Egg bites",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    type: "At Home",
    category: "Whole Bean",
    subCategories: [
      {
        name: "Starbucks Reserve",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Blonde Roast",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Medium Roast",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    type: "At Home",
    category: "Teavana tea",
    subCategories: [
      {
        name: "Starbucks Reserve",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Blonde Roast",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Medium Roast",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    type: "At Home",
    category: "Cold Brew",
    subCategories: [
      {
        name: "Starbucks Reserve",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Blonde Roast",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Medium Roast",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    type: "Merchandise",
    category: "Cold Cups",
    subCategories: [
      {
        name: "Cold Cups",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Tumblers",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Mugs",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    type: "Merchandise",
    category: "Tumblers",
    subCategories: [
      {
        name: "Cold Cups",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Tumblers",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Mugs",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    type: "Merchandise",
    category: "Mugs",
    subCategories: [
      {
        name: "Cold Cups",
        items: [
          { img: require("../images/filtered.png"), name: "Dark Roast" },
          { img: require("../images/cappuccino.png"), name: "Cappuccino" },
          { img: require("../images/expresso.png"), name: "Expresso" },
          { img: require("../images/mocha.png"), name: "Caffe Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Peppermint Frappuccino",
          },
        ],
      },
      {
        name: "Tumblers",
        items: [
          { img: require("../images/filtered.png"), name: "English Breakfast" },
          { img: require("../images/cappuccino.png"), name: "Chai Tea" },
          { img: require("../images/expresso.png"), name: "Matcha Green Tea" },
          { img: require("../images/mocha.png"), name: "Peppermint Tea" },
          {
            img: require("../images/frappuccino.png"),
            name: "Earl Grey Tea",
          },
        ],
      },
      {
        name: "Mugs",
        items: [
          { img: require("../images/filtered.png"), name: "Iced Coffee" },
          { img: require("../images/cappuccino.png"), name: "Iced Tea" },
          { img: require("../images/expresso.png"), name: "Iced Latte" },
          { img: require("../images/mocha.png"), name: "Iced Mocha" },
          {
            img: require("../images/frappuccino.png"),
            name: "Frappuccino",
          },
        ],
      },
    ],
  },
];
