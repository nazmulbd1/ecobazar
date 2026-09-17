import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Loader2 } from 'lucide-react';
import axios from 'axios';
import Container from '../components/layouts/Container';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coupon, setCoupon] = useState('');

  // Axios দিয়ে DummyJSON API থেকে প্রোডাক্ট ফেচ করা
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=2');
        
        // API থেকে পাওয়া ডাটাকে কার্ট স্ট্রাকচারে ম্যাপ করা
        const formattedProducts = response.data.products.map((item, index) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          quantity: index === 0 ? 5 : 1, // প্রথমটির পরিমাণ ৫ এবং দ্বিতীয়টির ১ সেট করা
          image: item.thumbnail,
        }));
        
        setCartItems(formattedProducts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching cart items with axios:', err);
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  // পরিমাণ বাড়ানোর ফাংশন
  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // পরিমাণ কমানোর ফাংশন
  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // আইটেম রিমুভ করার ফাংশন
  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // সাবটোটাল হিসাব করা
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen py-10">
      {/* 1420px Max-width Container */}
      <Container>
        
        {/* Page Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
          My Shopping Cart
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Side: Cart Items List using DIVs */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Table Header Simulation (using CSS Grid) */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="hidden md:grid grid-cols-12 gap-4 py-4 px-6 border-b border-gray-200 text-gray-400 text-xs uppercase tracking-wider font-medium">
                <div className="col-span-5">Product</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-3">Quantity</div>
                <div className="col-span-2">Subtotal</div>
              </div>

              {/* Cart Items Rows */}
              <div className="divide-y divide-gray-100">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-5 px-6 hover:bg-gray-50/50 transition relative"
                    >
                      {/* Product Info (Image & Name) */}
                      <div className="col-span-1 md:col-span-5 flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 object-cover rounded-md border border-gray-100 bg-gray-100"
                        />
                        <span className="font-medium text-gray-800 text-sm md:text-base line-clamp-2">{item.name}</span>
                      </div>

                      {/* Price */}
                      <div className="col-span-1 md:col-span-2 flex justify-between md:block text-sm">
                        <span className="md:hidden text-gray-400 font-medium">Price:</span>
                        <span className="text-gray-600 font-medium">${item.price.toFixed(2)}</span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="col-span-1 md:col-span-3 flex justify-between md:block">
                        <span className="md:hidden text-gray-400 font-medium self-center">Quantity:</span>
                        <div className="inline-flex items-center border border-gray-200 rounded-full px-2 py-1 bg-white">
                          <button 
                            onClick={() => handleDecrease(item.id)}
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-semibold text-gray-800">{item.quantity}</span>
                          <button 
                            onClick={() => handleIncrease(item.id)}
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Subtotal & Remove Action */}
                      <div className="col-span-1 md:col-span-2 flex items-center justify-between">
                        <div className="flex justify-between md:block w-full">
                          <span className="md:hidden text-gray-400 font-medium">Subtotal:</span>
                          <span className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        
                        {/* Remove Button */}
                        <button 
                          onClick={() => handleRemove(item.id)}
                          className="absolute top-4 right-4 md:static text-gray-400 hover:text-red-500 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition hover:border-red-200 ml-2"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500 flex flex-col items-center justify-center space-y-3">
                    <ShoppingBag size={48} className="text-gray-300" />
                    <p>Your cart is empty.</p>
                  </div>
                )}
              </div>

              {/* Table Bottom Action Buttons */}
              <div className="flex flex-wrap items-center justify-between p-6 bg-white border-t border-gray-100 gap-4">
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full text-sm transition">
                  Return to shop
                </button>
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full text-sm transition">
                  Update Cart
                </button>
              </div>
            </div>

            {/* Coupon Code Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="font-semibold text-gray-900 text-lg whitespace-nowrap">Coupon Code</h3>
              <div className="flex w-full sm:w-auto items-center flex-1 max-w-md border border-gray-200 rounded-full overflow-hidden p-1">
                <input 
                  type="text" 
                  placeholder="Enter code" 
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full px-4 py-2 text-sm focus:outline-none text-gray-700 bg-transparent"
                />
                <button className="bg-[#2B2B2B] hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition whitespace-nowrap">
                  Apply Coupon
                </button>
              </div>
            </div>

          </div>

          {/* Right Side: Cart Total Summary Box */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Cart Total</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between pb-3 border-b border-gray-100">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between pb-4 border-b border-gray-100">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium text-gray-900">Free</span>
              </div>
              
              <div className="flex justify-between pt-1 pb-2">
                <span className="text-gray-900 font-bold text-base">Total:</span>
                <span className="font-bold text-gray-900 text-base">${subtotal.toFixed(2)}</span>
              </div>

              {/* Proceed to Checkout Button */}
              <button className="w-full mt-4 py-3.5 bg-[#00B207] hover:bg-[#009b06] text-white font-semibold rounded-full shadow-md transition text-center">
                Proceed to checkout
              </button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Cart;