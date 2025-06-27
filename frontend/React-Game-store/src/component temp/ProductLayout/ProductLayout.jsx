// ProductLayout.js

import { v4 as uuidv4 } from 'uuid';

const GameProductdata = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/51afJC92cgL._SX522_.jpg",
    title: "Sony PlayStation®5 Digital Edition (Slim) Console",
    company: "Platform: PlayStation 5",
    sold: "1K+ bought in past month",
    price: "₹44,990"
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61Q1Pa4X4-L._SX679_.jpg",
    title: "Sony DualSense Wireless Controller – White",
    company: "Brand: Sony",
    sold: "2K+ bought in past month",
    price: "-4% ₹6,149"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/517X+Bfn5qL._SX342_SY445_.jpg",
    title: "Red Dead Redemption 2 Standard Edition (PS4)",
    company: "Platform: PlayStation 4",
    sold: "100+ bought in past month",
    price: "-1% ₹2,266"
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/81eccxSYvWL._AC_UY218_.jpg",
    title: "Call of Duty: Modern Warfare III (PS5)",
    company: "Platform: PlayStation 5",
    sold: "500+ bought in past month",
    price: "₹4,499"
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/71RmYwT5JOL._AC_UY218_.jpg",
    title: "FIFA 23 (PS4)",
    company: "Platform: PlayStation 4",
    sold: "800+ bought in past month",
    price: "₹2,499"
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/81cvVRtcznL._AC_UY218_.jpg",
    title: "Grand Theft Auto V Premium Edition (PS5)",
    company: "Platform: PlayStation 5",
    sold: "2K+ bought in past month",
    price: "₹1,999"
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/81cou8GvIfL._AC_UY218_.jpg", // fixed typo
    title: "Hogwarts Legacy (PS5)",
    company: "Platform: PlayStation 5",
    sold: "1.2K+ bought in past month",
    price: "₹3,799"
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/61KXzwaghhL._AC_UY218_.jpg",
    title: "The Last of Us Part II (PS4)",
    company: "Platform: PlayStation 4",
    sold: "1K+ bought in past month",
    price: "₹1,499"
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/81E5a+Vym-L._AC_UY218_.jpg",
    title: "PS4 GOD OF WAR - Ragnarok Standard",
    company: "Platform: PlayStation 5",
    sold: "900+ bought in past month",
    price: "₹3,299"
  },
  {
    id: 10,
    image: "https://m.media-amazon.com/images/I/81pUkYQJ2cL._AC_UY218_.jpg",
    title: "Black Myth: Wukong | Standard Edition | PlayStation 5",
    company: "Platform: PlayStation 5",
    sold: "650+ bought in past month",
    price: "₹4,299"
  }
];

// Productcard.jsx
const Productcard = (props) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white cursor-pointer group">
      
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={props.img}
          alt={props.title}
          className="w-full h-52 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <h1 className="text-lg font-semibold text-gray-800 mb-1">{props.title}</h1>
      <p className="text-sm text-gray-500">{props.company}</p>
      <p className="text-sm text-gray-500">{props.sold}</p>
      <p className="text-lg font-bold text-green-600 mt-1">{props.price}</p>

      <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 hover:scale-[1.03] transition-all duration-300 font-medium">
        Buy Now
      </button>
    </div>
  );
};


// Main Layout
const ProductLayout = () => {
  return (
    <div className="2xl:container mx-auto py-6">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GameProductdata.map((item) => (
          <Productcard
           key={uuidv4()}
            img={item.image}
            title={item.title}
            company={item.company}
            sold={item.sold}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductLayout;  


