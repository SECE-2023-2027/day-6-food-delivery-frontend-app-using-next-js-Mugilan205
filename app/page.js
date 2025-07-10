// app/page.js
"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const topChains = [
  { name: "Burger House", img: "/images/burger_house.jpg" },
  { name: "Taco Town", img: "/images/taco_town.jpg" },
  { name: "Sushi Street", img: "/images/sushi_street.jpg" },
  { name: "Pasta Place", img: "/images/pasta_place.jpg" },
  { name: "Grill Master", img: "/images/grill_master.jpg" },
  { name: "Curry Corner", img: "/images/curry_corner.jpg" },
];

const onlineRestaurants = [
  {
    name: "Burger House",
    img: "/images/burger_house.jpg",
    cuisine: "American, Fast Food, Beverages",
    price: "₹300 for two",
  },
  {
    name: "Taco Town",
    img: "/images/taco_town.jpg",
    cuisine: "Mexican, Wraps, Snacks",
    price: "₹250 for two",
  },
  {
    name: "Sushi Street",
    img: "/images/sushi_street.jpg",
    cuisine: "Japanese, Seafood, Sushi Rolls",
    price: "₹400 for two",
  },
  {
    name: "Pasta Place",
    img: "/images/pasta_place.jpg",
    cuisine: "Italian, Continental, Salads",
    price: "₹350 for two",
  },
  {
    name: "Grill Master",
    img: "/images/grill_master.jpg",
    cuisine: "BBQ, American Grill, Steaks",
    price: "₹450 for two",
  },
  {
    name: "Curry Corner",
    img: "/images/curry_corner.jpg",
    cuisine: "Indian, Spicy, Thalis",
    price: "₹300 for two",
  },
  {
    name: "Salad Stop",
    img: "/images/salad_stop.jpg",
    cuisine: "Healthy, Salads, Juices",
    price: "₹280 for two",
  },
  {
    name: "Pizza Point",
    img: "/images/pizza_point.jpg",
    cuisine: "Italian, Pizza, Fast Food",
    price: "₹320 for two",
  },
  {
    name: "Wrap World",
    img: "/images/wrap_world.jpg",
    cuisine: "Wraps, Rolls, Kathi",
    price: "₹260 for two",
  },
  {
    name: "Biryani Hub",
    img: "/images/biryani_hub.jpg",
    cuisine: "Hyderabadi, Biryani, Kebabs",
    price: "₹350 for two",
  },
];

export default function HomePage() {
  const [startIndex, setStartIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const visibleTopChains = topChains.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex < topChains.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="p-6 space-y-10">
      <nav className="flex justify-between items-center py-4 border-b">
        <div className="font-bold text-xl">🍔</div>
        <div className="space-x-6 text-sm flex items-center">
          <span className="text-orange-500 font-medium">Home</span>
          <span>Help</span>
          <span>Search 🔍</span>
          <div className="relative">
            <ShoppingCart className="inline" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 text-white text-xs bg-red-500 rounded-full px-1">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Top restaurant chains in Noida
        </h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-hidden">
            {visibleTopChains.map((rest, index) => (
              <div key={index} className="w-48 shrink-0">
                <img
                  src={rest.img}
                  className="rounded-md w-full h-32 object-cover"
                  alt={rest.name}
                />
                <p className="text-center mt-2 text-sm font-medium">
                  {rest.name}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <button onClick={handlePrev}>
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <button onClick={handleNext}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 mt-8">
          Restaurants with online food delivery in Noida
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {onlineRestaurants.map((rest, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img
                src={rest.img}
                className="w-full h-32 object-cover"
                alt={rest.name}
              />
              <div className="p-2">
                <h3 className="font-medium text-sm">{rest.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {rest.cuisine}
                </p>
                <p className="text-xs text-gray-600 mt-1">{rest.price}</p>
                <button
                  onClick={() => addToCart(rest)}
                  className="mt-2 text-xs text-white bg-green-500 px-2 py-1 rounded hover:bg-green-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
