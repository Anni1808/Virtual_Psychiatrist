import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #b2dfdb, #80cbc4);
  font-family: "Poppins", sans-serif;
  color: #2c3e50;
  text-align: center;
  padding: 20px;
  overflow: hidden;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #00695c, #004d40);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  color: #004d40;
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 150, 136, 0.4) 0%, rgba(0, 150, 136, 0) 70%);
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.7;
  animation: float 6s infinite alternate ease-in-out;
  @keyframes float {
    0% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(20px);
    }
  }
`;

const About = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <GlowEffect style={{ top: "10%", left: "10%" }} />
      <GlowEffect style={{ bottom: "10%", right: "10%" }} />
      
      <Title initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        About Virtual Psychiatrist
      </Title>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Our AI-driven psychiatrist chatbot provides mental health support through conversations.
        Virtual Psychiatrist is here to listen and help whenever you need guidance.
      </Description>
    </AboutContainer>
  );
};

export default About;