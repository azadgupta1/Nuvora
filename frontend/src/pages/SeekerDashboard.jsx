import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MentorList from '../components/MentorList';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 30px;
  background: linear-gradient(to right, #FAD0C4, #FFD1FF); /* Soft Pastel Gradient */
  min-height: 100vh;
`;

const Section = styled.div`
  margin: 20px 0;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  color: #5A189A;
  text-align: center;
  margin-bottom: 20px;
`;

const SessionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const SessionCard = styled.div`
  background: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CancelButton = styled.button`
  background: #dc3545;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #b52a3a;
  }
`;

const SeekerDashboard = () => {
  const [bookedSessions, setBookedSessions] = useState([]);

  useEffect(() => {
    const savedSessions = JSON.parse(localStorage.getItem('bookedSessions')) || [];
    setBookedSessions(savedSessions);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookedSessions', JSON.stringify(bookedSessions));
  }, [bookedSessions]);

  const handleBooking = (mentor, date) => {
    const newSession = { mentor, date: date.toLocaleString() };
    setBookedSessions([...bookedSessions, newSession]);
  };

  const handleCancel = (index) => {
    setBookedSessions(bookedSessions.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Heading>🎓 Seeker Dashboard</Heading>

        {/* My Enrolled Sessions */}
        <Section>
          <h3>📅 My Enrolled Sessions</h3>
          {bookedSessions.length === 0 ? (
            <p>You haven't enrolled in any sessions yet.</p>
          ) : (
            <SessionList>
              {bookedSessions.map((session, index) => (
                <SessionCard key={index}>
                  <p>
                    <strong>{session.mentor.name}</strong> - {session.date}
                  </p>
                  <CancelButton onClick={() => handleCancel(index)}>Cancel</CancelButton>
                </SessionCard>
              ))}
            </SessionList>
          )}
        </Section>

        {/* Find a Mentor */}
        <Section>
          <h3>🔍 Find a Mentor</h3>
          <MentorList onBooking={handleBooking} />
        </Section>

        {/* AI-Powered Recommendations */}
        <Section>
          <h3>🤖 Recommended for You</h3>
          <p>Coming soon...</p>
        </Section>
      </DashboardContainer>
    </>
  );
};

export default SeekerDashboard;
