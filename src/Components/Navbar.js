import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(135deg, #5f9ea0, #82b1b6);
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 55px;
`;

const Logo = styled(motion.h1)`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.3s ease-in-out;
  font-family: "Poppins", sans-serif;

  &:hover {
    color: #ffdf00;
  }
`;

const DarkModeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
`;

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.background = darkMode ? "#f5f5f5" : "#1e1e1e";
  };

  return (
    <Nav>
      <Logo whileHover={{ scale: 1.1 }}>EmpathyAI</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavLinks>
      <DarkModeToggle onClick={toggleDarkMode}>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </DarkModeToggle>
    </Nav>
  );
};

export default Navbar;
