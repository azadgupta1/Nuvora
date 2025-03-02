import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #FAF3FF; 
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: #BFA2DB; 
  color: white;
  padding: 10px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #A081C4; 
  }
`;

const CancelButton = styled(Button)`
  background: #D291BC; 
  
  &:hover {
    background: #B36A97; 
  }
`;

const BookSessionModal = ({ mentor, onClose, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleConfirm = () => {
    if (selectedDate) {
      onConfirm(selectedDate);
      onClose();
    } else {
      alert('Please select a date and time.');
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h3 style={{ color: '#5E3D94' }}>Book a session with {mentor.name}</h3>
        <p style={{ color: '#7E5A9B' }}>Expertise: {mentor.expertise}</p>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Select Date & Time"
          style={{ borderRadius: '5px', padding: '8px', border: '1px solid #BFA2DB' }}
        />

        <Button onClick={handleConfirm}>Confirm Booking</Button>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default BookSessionModal;
