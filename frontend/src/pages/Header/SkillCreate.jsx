// src/pages/AddSkillForm.jsx

import React, { useState } from 'react';
import { addSkill } from '../../services/skillServices';

const SkillCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    image: '',
    duration: '',
    location: '',
    availability: '',
    skillWantedInReturn: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    const token = localStorage.getItem('token'); // Assumes JWT is stored in localStorage

    try {
      const response = await addSkill(formData, token);
      setMessage(response.message);
      setFormData({
        name: '',
        category: '',
        description: '',
        image: '',
        duration: '',
        location: '',
        availability: '',
        skillWantedInReturn: '',
      });
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Add a New Skill</h2>
      
      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'category', 'description', 'image', 'duration', 'location', 'availability', 'skillWantedInReturn'].map((field) => (
          <div key={field}>
            <label className="block font-medium capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required={['name', 'category', 'description', 'duration', 'availability', 'skillWantedInReturn'].includes(field)}
            />
          </div>
        ))}
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Add Skill'}
        </button>
      </form>
    </div>
  );
};

export default SkillCreate;
