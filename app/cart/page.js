"use client";

import React from "react";

export default function CartPage() {
  return (
    <div className="p-6">
      <nav className="flex justify-between items-center py-4 border-b">
        <h1 className="text-xl font-bold">🛒 Your Cart</h1>
        <button className="text-sm text-blue-600 hover:underline">
          Back to Home
        </button>
      </nav>

      <section className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <img
                src={`/images/sample${i + 1}.jpg`}
                className="w-full h-32 object-cover"
                alt="Sample Dish"
              />
              <div className="p-2">
                <h3 className="font-medium text-sm">Sample Dish {i + 1}</h3>
                <p className="text-xs text-gray-600 mt-1">₹200</p>
                <button className="mt-2 text-xs text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-right">
          <p className="text-lg font-semibold">Total: ₹800</p>
          <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </div>
      </section>
    </div>
  );
}
