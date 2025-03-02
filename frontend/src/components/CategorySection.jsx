import React from 'react';
import styled from 'styled-components';

const categories = [
  'Programming',
  'Art & Painting',
  'Mental Health',
  'Fitness & Lifestyle',
  'Graphic Design',
  'Business & Finance',
];

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  background: #FAF3FF; 
`;

const CategoryCard = styled.div`
  padding: 15px 20px;
  background: #BFA2DB; 
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #A081C4; 
    transform: scale(1.05); 
  }
`;

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((category, index) => (
        <CategoryCard key={index}>{category}</CategoryCard>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
