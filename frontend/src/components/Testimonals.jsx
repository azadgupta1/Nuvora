import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, #FAD0C4, #FFD1FF); /* Soft Peach to Pastel Pink */
  text-align: center;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #5A189A; /* Dark Purple for contrast */
  margin-bottom: 20px;
`;

const Review = styled.div`
  font-size: 1.1rem;
  color: #6A0572; /* Deep Purple */
  margin-bottom: 15px;
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 10px auto;
`;

const testimonials = [
  "🌟 This website changed my learning journey!",
  "💡 I found the best mentors here!",
  "🚀 The AI recommendations are spot on!",
];

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Title>🌸 Wall of Love 💜</Title>
      {testimonials.map((text, index) => (
        <Review key={index}>{text}</Review>
      ))}
    </TestimonialsContainer>
  );
};

export default Testimonials;
