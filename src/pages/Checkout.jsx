import React, { useState } from "react";
import Container from "../components/layouts/Container";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-10">
          {/* Left Column: Billing Information & Additional Info */}
          <div className="lg:col-span-7 space-y-8">
            {/* Billing Information Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Billing Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Company Name{" "}
                    <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="House number and street name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Country / Region
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm bg-white text-gray-500">
                    <option>Select</option>
                    <option>Bangladesh</option>
                    <option>United States</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    States
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm bg-white text-gray-500">
                    <option>Selects</option>
                    <option>Dhaka</option>
                    <option>New York</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="ship-different"
                  className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                />
                <label
                  htmlFor="ship-different"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  Ship to a different address
                </label>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Additional Info
              </h2>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Order Notes (Optional)
                </label>
                <textarea
                  rows="4"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Payment Method */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Order Summary
            </h2>

            {/* Cart Items List */}
            <div className="divide-y divide-gray-100 space-y-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between pt-4 first:pt-0">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=100&auto=format&fit=crop&q=60"
                    alt="Green Capsicum"
                    className="w-12 h-12 object-cover rounded-md border border-gray-100"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Green Capsicum
                    </p>
                    <p className="text-xs text-gray-500">x5</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  $70.00
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=100&auto=format&fit=crop&q=60"
                    alt="Red Capsicum"
                    className="w-12 h-12 object-cover rounded-md border border-gray-100"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Red Capsicum
                    </p>
                    <p className="text-xs text-gray-500">x1</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  $14.00
                </span>
              </div>
            </div>

            {/* Pricing Calculation */}
            <div className="border-t border-gray-200 pt-4 space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span className="font-medium text-gray-900">$84.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping:</span>
                <span className="font-medium text-gray-900">Free</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-gray-900 pt-2 border-t border-gray-100">
                <span>Total:</span>
                <span>$84.00</span>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h3 className="text-base font-semibold text-gray-900">
                Payment Method
              </h3>

              <div className="space-y-3">
                {/* Cash on Delivery */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">
                    Cash on Delivery
                  </span>
                </label>

                {/* Paypal */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">Paypal</span>
                </label>

                {/* Amazon Pay */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="amazon"
                    checked={paymentMethod === "amazon"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">Amazon Pay</span>
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full bg-[#00B207] hover:bg-[#009b06] text-white font-medium py-3.5 rounded-full transition-colors duration-200 shadow-sm">
              Place Order
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
