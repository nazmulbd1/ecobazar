import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";

const Login = () => {
  let [eyeShow, setEyeShow] = useState(false);

  return (
    <div className="w-[520px] font-pop bg-white p-6 shadow-md my-10 mx-auto rounded-md">
      <h3 className="font-pop font-semibold text-[32px] text-center mb-5">
        Sign In
      </h3>
      <input
        type="text"
        placeholder="Email"
        className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 rounded-md text-[16px]"
      />
      <div className="relative">
        <input
          type={eyeShow ? "text" : "password"}
          placeholder="Password"
          className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-[16px] pr-10"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
        onClick={()=>setEyeShow(!eyeShow)}>
          {eyeShow ? 
          <FaRegEye />
          :
          <FaRegEyeSlash/>
          }
        </div>
      </div>

      <div className="flex justify-between my-4">
        <div className="flex items-center text-[#666666]">
          <input id="agree" type="checkbox" className="mr-2" />
          <label htmlFor="agree" className="font-pop text-sm">
            Remember me
          </label>
        </div>
        <p className="text-center text-sm text-[#999999]">
          <Link to="/forgot-password" className="text-primary cursor-pointer">
            Forgot Password?
          </Link>
        </p>
      </div>

      <button className="w-full bg-primary text-white py-2 rounded-full font-pop text-sm hover:bg-blue-600 cursor-pointer">
        Login
      </button>
      <p className="text-center mt-4 text-sm text-[#999999]">
        Don't have an account?
        <Link
          to="/registration"
          className="text-[#1A1A1A] cursor-pointer hover:text-primary"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
