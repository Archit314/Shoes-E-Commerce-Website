// src/pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";

const featuredProducts = [
  { id: 1, name: "Air Max 270", price: "$120", img: "https://via.placeholder.com/300x300?text=Air+Max" },
  { id: 2, name: "Jordan Retro 1", price: "$150", img: "https://via.placeholder.com/300x300?text=Jordan+1" },
  { id: 3, name: "Yeezy Boost 350", price: "$200", img: "https://via.placeholder.com/300x300?text=Yeezy+350" },
  { id: 4, name: "Nike Dunk Low", price: "$130", img: "https://via.placeholder.com/300x300?text=Nike+Dunk" },
];

const brands = [
  { id: 1, name: "Nike", img: "https://via.placeholder.com/150x100?text=Nike" },
  { id: 2, name: "Adidas", img: "https://via.placeholder.com/150x100?text=Adidas" },
  { id: 3, name: "Puma", img: "https://via.placeholder.com/150x100?text=Puma" },
  { id: 4, name: "Jordan", img: "https://via.placeholder.com/150x100?text=Jordan" },
  { id: 5, name: "Reebok", img: "https://via.placeholder.com/150x100?text=Reebok" },
];

function HomePage() {
  return (
    <div className="text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[80vh] flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Kickz</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Step up your style. Find the latest sneakers and limited editions right here.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-yellow-500 font-bold">{product.price}</p>
                <button className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <img src="https://via.placeholder.com/200x200?text=Running" alt="Running" className="mx-auto mb-4 rounded-lg"/>
            <h3 className="font-semibold">Running Shoes</h3>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <img src="https://via.placeholder.com/200x200?text=Basketball" alt="Basketball" className="mx-auto mb-4 rounded-lg"/>
            <h3 className="font-semibold">Basketball Shoes</h3>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <img src="https://via.placeholder.com/200x200?text=Casual" alt="Casual" className="mx-auto mb-4 rounded-lg"/>
            <h3 className="font-semibold">Casual Sneakers</h3>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <img src="https://via.placeholder.com/200x200?text=High+Top" alt="High Tops" className="mx-auto mb-4 rounded-lg"/>
            <h3 className="font-semibold">High Tops</h3>
          </div>
        </div>
      </section>

      {/* Shop by Brands Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center hover:scale-105 transform transition-all duration-300 cursor-pointer"
            >
              <img src={brand.img} alt={brand.name} className="h-16 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Kickz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
