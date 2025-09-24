// /data/products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  oldPrice?: number; // optional, for showing discounts
  discount?: number; // optional, percentage discount
  category?: string; // optional for filtering later
}

export const products: Product[] = [
  { id: 1, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 2, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product2.jpg", },
  { id: 3, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product3.jpg", },
  { id: 4, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product4.jpg", },
  { id: 5, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product5.jpg", },
  { id: 6, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product6.jpg", },
  { id: 7, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product7.jpg", },
  { id: 8, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product8.jpg", },
  { id: 9, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 10, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product2.jpg", },
  { id: 11, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product3.jpg", },
  { id: 12, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product4.jpg", },
  { id: 13, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product5.jpg", },
  { id: 14, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product6.jpg", },
  { id: 15, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product7.jpg", },
  { id: 16, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product8.jpg", },
  { id: 17, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 18, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product2.jpg", },
  { id: 19, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product3.jpg", },
  { id: 20, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product4.jpg", },
  { id: 21, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product5.jpg", },
  { id: 22, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product6.jpg", },
  { id: 23, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product7.jpg", },
  { id: 24, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product8.jpg", },
  { id: 25, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product1.jpg", },
  { id: 26, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product2.jpg", },
  { id: 27, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product3.jpg", },
  { id: 28, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product4.jpg", },
  { id: 29, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product5.jpg", },
  { id: 30, name: "The B&B Flex Couple Watch Rakhi Set", price: 4798, oldPrice: 16648, discount: 71, image: "/images/product6.jpg", },
  { id: 31, name: "The Loyal & Lookin Good Couple Watch Rakhi Set", price: 4318, oldPrice: 19298, discount: 78, image: "/images/product7.jpg", },
  { id: 32, name: "Not Just In-Laws Couple Watch Rakhi Set", price: 4068, oldPrice: 14348, discount: 72, image: "/images/product8.jpg", },
];
