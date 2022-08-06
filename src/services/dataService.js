var catalog = [
  {
    _id: "1",
    title:"Oranges",
    price: 12.00,
    category: "Fruit",
    image: "neworanges.jpg",

  },

  {
    _id: "2",
    title: "Apples",
    price:12.00,
    category:"Fruit",
    image: "Apples.jpg"
  },

  {
    _id: "3",
    title: "Kiwi",
    price:10.00,
    category: "Fruit",
    image: "kiwi.jpg",
  },

  {
    _id: "3",
    title: "pears",
    price:15.00,
    category: "Fruit",
    image: "pears.jpg",
  },

  {
    _id: "4",
    title: "Watermelon",
    price:20.00,
    category: "Fruit",
    image: "watermelon.jpg",
  },
];

class DataService{
  getCatalog() {
    // call the server
    //get thet list of products and return it

    return catalog;
  }
}

export default DataService;