import axios from 'axios';
import Product from '../components/product';

const catalog = [
  {
    _id: "1",
    title:"Oranges",
    price: 12.02,
    category: "Fruit",
    image: "neworanges.jpg",

  },

  {
    _id: "2",
    title: "Apples",
    price:12.30,
    category:"Fruit",
    image: "Apples.jpg"
  },

  {
    _id: "3",
    title: "Kiwi",
    price:10.14,
    category: "Fruit",
    image: "kiwi.jpg",
  },

  {
    _id: "4",
    title: "pears",
    price:15.67,
    category: "Fruit",
    image: "pears.jpg",
  },

  {
    _id: "5",
    title: "Watermelon",
    price:20.00,
    category: "Fruit",
    image: "watermelon.jpg",
  },
];

class DataService{
  async getCatalog() {
    // call the server
    //get thet list of products and return it
    let res = await axios.get('http://127.0.0.1:5000/api/catalog');
    return res.data

    //return catalog;
  }

  async saveProduct(prod) {
    let res = await axios.post('http://127.0.0.1:5000/api/catalog', prod);
    return res.data;
  }
}

export default DataService;