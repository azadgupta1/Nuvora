import React, { useState } from 'react';
import styled from 'styled-components';
import BookSessionModal from './BookSession';

const mentors = [
  { name: 'Alice Johnson', expertise: 'Python & AI', rating: '⭐⭐⭐⭐⭐' },
  { name: 'Mark Smith', expertise: 'UI/UX Design', rating: '⭐⭐⭐⭐' },
  { name: 'Sophia Lee', expertise: 'Personal Finance', rating: '⭐⭐⭐⭐⭐' },
];

const MentorContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const MentorCard = styled.div`
  background: #E6D6FF; /* Pastel Purple */
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  flex: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: #BFA2DB; /* Slightly darker pastel purple */
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background: #9D77CB; /* Darker shade for hover effect */
  }
`;

const MentorList = ({ onBooking }) => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <>
      <MentorContainer>
        {mentors.map((mentor, index) => (
          <MentorCard key={index}>
            <h4>{mentor.name}</h4>
            <p>{mentor.expertise}</p>
            <p>{mentor.rating}</p>
            <Button onClick={() => setSelectedMentor(mentor)}>Book Session</Button>
          </MentorCard>
        ))}
      </MentorContainer>

      {selectedMentor && (
        <BookSessionModal
          mentor={selectedMentor}
          onClose={() => setSelectedMentor(null)}
          onConfirm={(date) => onBooking(selectedMentor, date)}
        />
      )}
    </>
  );
};

export default MentorList;
