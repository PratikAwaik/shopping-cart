import product11 from "./images/product-1-1.jpg";
import product12 from "./images/product-1-2.jpg";
import product13 from "./images/product-1-3.jpg";
import product14 from "./images/product-1-4.jpg";
import product21 from "./images/product-2-1.jpg";
import product22 from "./images/product-2-2.jpg";
import product23 from "./images/product-2-3.jpeg";
import product24 from "./images/product-2-4.jpg";

const data = [
  {
    itemId: 0,
    itemName: "Voyager 1",
    itemPrice: 49.99,
    itemDescription:
      "Voyager 1 is a space probe launched by NASA on September 5, 1977. Part of the Voyager program to study the outer Solar System, Voyager 1 was launched 16 days after its twin, Voyager 2.",
    itemDimensions: "24in x 36in",
    itemImages: [product11, product12, product13, product14],
  },
  {
    itemId: 1,
    itemName: "Voyager 2",
    itemPrice: 49.99,
    itemDescription:
      "Voyager 2 is a space probe launched by NASA on August 20, 1977, to study the outer planets. Part of the Voyager program, it was launched 16 days before its twin, Voyager 1.",
    itemDimensions: "24in x 36in",
    itemImages: [product21, product22, product23, product24],
  },
];

export default data;
