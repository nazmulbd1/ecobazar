import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import Container from "../components/layouts/Container";

const Home = () => {
  // let data = useSelector((state)=> console.log(state));

  return (
    <>
      <Container>
        <Link
          to="/login"
          className="text-[#1A1A1A] cursor-pointer hover:text-primary"
        >
          Login
        </Link>
        <br />
        <Link
          to="/registration"
          className="text-[#1A1A1A] cursor-pointer hover:text-primary"
        >
          Register
        </Link>
      </Container>
    </>
  );
};

export default Home;
