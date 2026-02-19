// Sirf data hai yahan

const products = [
  
  {
    id: 1,
    name: "Aashirvaad Aata",
    price: 106,
    quantity: "2kg",
    image: "Images/aata.jpg",
    category: "aata-food",
    mrp: 130
  },
  {
    id: 2,
    name: "Organic Tattva Besan",
    quantity: "500gm",
    price: 120,
    image: "Images/besan.jpg",
    category: "aata-food",
        mrp: 135
  },
  {
    id: 3,
    name: "Aashirvaad Sooji Rava",
    price: 60,
    quantity: "1kg",
    image: "Images/soojirava.jpg",
    category: "aata-food",
        mrp: 80

  },
  {
    id: 4,
    name: "Anil Maida Flour",
    price: 40,
    image: "Images/maida.jpg",
    quantity: "500 gm",
    category: "aata-food",
        mrp: 55
  },
  {
    id: 5,
    name: "Unity Basmati Rice",
    price: 136,
    quantity: "1kg",
    image: "Images/basmatiRice.jpg",
    category: "aata-food",
        mrp: 150

  },
  {
  id:6,
  name: "Sting Energy Drink",
  price: 19,
  quantity: "250 ml",
  image: "Images/string.jpg",
  category:"cold-drinks",
      mrp: 23

  },
  {
  id:7,
  name: "Red Bull Energy Drink",
  price: 121,
  quantity: "250 ml",
  image: "Images/redbull.jpg",
  category:"cold-drinks",
      mrp: 130

  },
  {
  id:8,
  name: "Frooti Mango Drink",
  price: 33,
  quantity: "600 ml",
  image: "Images/frooti.jpg",
  category:"cold-drinks",
      mrp: 42

  },
  {
  id:9,
  name: "Bailley Drinking Water",
  price: 9,
  quantity: "1 Ltr",
  image: "Images/water.jpg",
  category:"cold-drinks",
      mrp: 12

  },
  {
  id:10,
  name: "Sprite Drink",
  price: 96,
  quantity: "2.25 Ltr",
  image: "Images/sprite.jpg",
  category:"cold-drinks",
      mrp: 105

  },
  {
  id:11,
  name: "Thillai's Biryani Masala",
  price: 30,
  quantity: "50 gm",
  image: "Images/biryani.jpg",
  category:"masala-spices",
      mrp: 40

  },
  {
  id:12,
  name: "Thillai's Curry Masala",
  price: 25,
  quantity: "50 gm",
  image: "Images/curry.jpg",
  category:"masala-spices",
      mrp: 32

  },
  {
  id:13,
  name: "Everest Chaat Masala",
  price: 80,
  quantity: "100 gm",
  image: "Images/everest.jpg",
  category:"masala-spices",
      mrp: 90

  },
  {
  id:14,
  name: "Everest Garam Masala",
  price: 100,
  quantity: "100 gm",
  image: "Images/garam.jpg",
  category:"masala-spices",
      mrp: 120

  },
  {
  id:15,
  name: "Aachi Chana Masala",
  price: 30,
  quantity: "50 gm",
  image: "Images/chana.jpg",
  category:"masala-spices",
      mrp: 40

  },
  {
  id:16,
  name: "Everest Sambhar Masala",
  price: 76,
  quantity: "100 gm",
  image: "Images/sambhar.jpg",
  category:"masala-spices",
      mrp: 80

  },
  {
  id:17,
  name: "Saffola Gold Oil Can",
  price: 1057,
  quantity: "5 Ltr",
  image: "Images/saffola.jpg",
  category:"soyabean-oil",
      mrp: 1200

  },
  {
  id:18,
  name: "Fortune Groundnut Oil Pouch",
  price: 155,
  quantity: "1 Ltr",
  image: "Images/fortune.jpg",
  category:"soyabean-oil",
  mrp: 176
  },
  {
  id:19,
  name: "Harina Groundnut Oil Can",
  price: 955,
  quantity: "5 Ltr",
  image: "Images/harina.jpg",
  category:"soyabean-oil",
      mrp: 1000

  },
  {
  id:20,
  name: "Fortune Rice Bran Oil",
  price: 165,
  quantity: "1 Ltr",
  image: "Images/richbrain.jpg",
  category:"soyabean-oil",
      mrp: 175

  },
  {
  id:21,
  name: "Dhathri Hair Care Herbal Oil",
  price: 182,
  quantity: "100 ml",
  image: "Images/hair1.jpg",
  category:"hair-care",
      mrp: 200

  },
  {
  id:22,
  name: "Aswini Hair Oil",
  price: 385,
  quantity: "400 ml",
  image: "Images/hair2.jpg",
  category:"hair-care",
      mrp: 400

  },
  {
  id:23,
  name: "Dabur Amla Hair Oil",
  price: 49,
  quantity: "90 ml",
  image: "Images/hair3.jpg",
  category:"hair-care",
      mrp: 55

  },
  {
  id:24,
  name: "Keya Chai Masala",
  price: 130,
  quantity: "60 gm",
  image: "Images/chai1.jpg",
  category:"chai-coffee",
      mrp: 150

  },
  {
  id:25,
  name: "Bru Gold Coffee",
  price: 85,
  quantity: "25 gm",
  image: "Images/chai2.jpg",
  category:"chai-coffee",
      mrp: 90

  },
  {
  id:26,
  name: "Nescafe Gold Coffee",
  price: 1406,
  quantity: "200 gm",
  image: "Images/chai3.jpg",
  category:"chai-coffee",
      mrp: 1500

  },
  {
  id:27,
  name: "Nescafe Classic Coffee Jar",
  price: 122,
  quantity: "25 gm",
  image: "Images/chai4.jpg",
  category:"chai-coffee",
      mrp: 130

  },
  {
  id:28,
  name: "Aashirvaad Iodised Salt",
  price: 27,
  quantity: "1 kg",
  image: "Images/salt1.jpg",
  category:"salt-sugar",
      mrp: 30

  },
  {
  id:29,
  name: "Tata Salt Lite",
  price: 48,
  quantity: "1 kg",
  image: "Images/salt2.jpg",
  category:"salt-sugar",
      mrp: 55

  },
  {
  id:30,
  name: "Natchiyar Sugar",
  price: 225,
  quantity: "5 kg",
  image: "Images/sugar1.jpg",
  category:"salt-sugar",
      mrp: 250

  },
  {
  id:31,
  name: "Diamond Sugar",
  price: 50,
  quantity: "500 gm",
  image: "Images/sugar2.jpg",
  category:"salt-sugar",
      mrp: 65

  },
  {
  id:32,
  name: "Asal Half Cooked Chapathi",
  price: 45,
  quantity: "200 gm",
  image: "Images/instant1.jpg",
  category:"instant-food",
      mrp: 50

  },
  {
  id:33,
  name: "Snac Atac Lentil Twister",
  price: 64,
  quantity: "90 gm",
  image: "Images/instant2.jpg",
  category:"instant-food",
      mrp: 70

  },
  {
  id:34,
  name: "Maggi Oats Noodles",
  price: 115,
  quantity: "292 gm",
  image: "Images/instant3.jpg",
  category:"instant-food",
      mrp: 120

  },
  {
  id:35,
  name: "Dabur Red Tooth Paste",
  price: 9,
  quantity: "20 gm",
  image: "Images/oral1.jpg",
  category:"oral-care",
      mrp: 11

  },
  {
  id:36,
  name: "Colgate Cibaca Tooth Brush",
  price: 14,
  quantity: "1 pc",
  image: "Images/oral2.jpg",
  category:"oral-care",
      mrp: 18

  },
  {
  id:37,
  name: "Cold-Cold Coffee",
  price: 220,
  quantity: "250 gm",
  image: "Images/drinks1.webp",
  category: "chai-coffee",
      mrp: 250

  },
  {
  id:38,
  name: "Saanchi Ghee",
  price: 220,
  quantity: "250 gm",
  image: "Images/dairy1.webp",
  category: "dairy-products",
      mrp: 250

  },
  {
  id:39,
  name: "Amul Ghee",
  price: 180,
  quantity: "250 gm",
  image: "Images/dairy2.webp",
  category: "dairy-products",
      mrp: 200

  },
  {
  id:40,
  name: "Britannia Dairy Whitener Powder",
  price: 171,
  quantity: "400 gm",
  image: "Images/britania.jpg",
  category: "dairy-products",
      mrp: 180

  },
  {
  id:41,
  name: "Amul Butter",
  price: 56,
  quantity: "100 gm",
  image: "Images/dairy4.webp",
  category: "dairy-products",
      mrp: 60

  },
  {
  id:42,
  name: "Dairy Day Chocolate Tub",
  price: 186,
  quantity: "900 ml",
  image: "Images/dairy-choco.jpg",
  category: "dairy-products",
      mrp: 210

  },
  {
  id:43,
  name: "Amul Cheese Spread",
  price: 110,
  quantity: "200 gm",
  image: "Images/amul.jpg",
  category: "dairy-products",
      mrp: 114

  }
];