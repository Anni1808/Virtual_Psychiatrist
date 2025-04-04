import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Content = styled(motion.div)`
  color: white;
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
`;

const Heading = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subheading = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const Button = styled(motion.button)`
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #4caf50, #00897b);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #45a049, #00796b);
    transform: scale(1.05);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
    <VideoBackground autoPlay loop muted>
  <source src="/calm.mp4" type="video/mp4" />
</VideoBackground>



      {/* Text Content */}
      <Content
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading>Welcome to EmpathyAI</Heading>
        <Subheading>Your personal AI psychiatrist, always here to listen.</Subheading>
        <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => navigate("/chat")}>
          Get Started
        </Button>
      </Content>
    </HomeContainer>
  );
};

export default Home;
