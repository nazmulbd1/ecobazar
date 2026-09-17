import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Container from "../components/layouts/Container";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products using axios from dummyjson
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=3")
      .then((response) => {
        // Map dummyjson data to fit our wishlist UI structure
        const formattedProducts = response.data.products.map((item, index) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          // Simulating an old price for the first item if discount exists, or default
          oldPrice: index === 0 ? Number((item.price * 1.25).toFixed(2)) : null,
          stockStatus: item.stock > 0 ? "In Stock" : "Out of Stock",
          image: item.thumbnail,
        }));
        setWishlistItems(formattedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load wishlist items.");
        setLoading(false);
      });
  }, []);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Container>
        <div className="pt-10 pb-15">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">
            My Wishlist
          </h1>

          {/* Wishlist Box Container */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            {/* Loading / Error States */}
            {loading ? (
              <div className="text-center py-16 text-gray-500 text-sm">
                Loading wishlist items...
              </div>
            ) : error ? (
              <div className="text-center py-16 text-rose-500 text-sm">
                {error}
              </div>
            ) : (
              <>
                {/* Responsive Table Wrapper */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    {/* Table Header */}
                    <thead>
                      <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-400">
                        <th className="py-4 px-6 font-medium">Product</th>
                        <th className="py-4 px-6 font-medium">Price</th>
                        <th className="py-4 px-6 font-medium">Stock Status</th>
                        <th className="py-4 px-6 font-medium text-right"></th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-100">
                      {wishlistItems.length > 0 ? (
                        wishlistItems.map((item) => (
                          <tr
                            key={item.id}
                            className="hover:bg-gray-50/50 transition-colors"
                          >
                            {/* Product Info */}
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-4">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-14 h-14 object-cover rounded-md border border-gray-100 bg-gray-50"
                                />
                                <span className="text-sm font-medium text-gray-800 line-clamp-1">
                                  {item.name}
                                </span>
                              </div>
                            </td>

                            {/* Price */}
                            <td className="py-4 px-6 text-sm whitespace-nowrap">
                              <span className="font-medium text-gray-900">
                                ${item.price.toFixed(2)}
                              </span>
                              {item.oldPrice && (
                                <span className="ml-2 text-gray-400 line-through text-xs">
                                  ${item.oldPrice.toFixed(2)}
                                </span>
                              )}
                            </td>

                            {/* Stock Status */}
                            <td className="py-4 px-6 whitespace-nowrap">
                              {item.stockStatus === "In Stock" ? (
                                <span className="inline-block px-2.5 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 rounded">
                                  In Stock
                                </span>
                              ) : (
                                <span className="inline-block px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 rounded">
                                  Out of Stock
                                </span>
                              )}
                            </td>

                            {/* Actions (Add to cart & Remove) */}
                            <td className="py-4 px-6 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-4">
                                {item.stockStatus === "In Stock" ? (
                                  <button className="bg-[#00B207] hover:bg-[#009b06] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors shadow-sm">
                                    Add to Cart
                                  </button>
                                ) : (
                                  <button
                                    disabled
                                    className="bg-gray-100 text-gray-400 text-sm font-medium px-6 py-2.5 rounded-full cursor-not-allowed"
                                  >
                                    Add to Cart
                                  </button>
                                )}

                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-colors"
                                  title="Remove item"
                                >
                                  <RxCross2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="4"
                            className="text-center py-12 text-gray-500 text-sm"
                          >
                            Your wishlist is empty.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* Footer / Share Links */}
            <div className="border-t border-gray-200 px-6 py-4 flex items-center gap-4 bg-gray-50/30">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              <div className="flex items-center gap-2">
                <a
                  href="#facebook"
                  className="w-8 h-8 bg-[#00B207] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <FaFacebookF size={12} />
                </a>
                <a
                  href="#twitter"
                  className="w-8 h-8 bg-white border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <FaTwitter size={12} />
                </a>
                <a
                  href="#pinterest"
                  className="w-8 h-8 bg-white border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <FaPinterestP size={12} />
                </a>
                <a
                  href="#instagram"
                  className="w-8 h-8 bg-white border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <FaInstagram size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Title */}
      </Container>
    </div>
  );
}
