import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../graphql/mutations'; // import the mutation
import '../styles/style.css'; // Adjust the path as needed


function AddItemForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Set up the mutation hook with the ADD_ITEM mutation
  const [addItem, { loading, error }] = useMutation(ADD_ITEM, {
    refetchQueries: ['GetItems'], // Update the items list after adding
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the addItem mutation with form data
    try {
      await addItem({ variables: { name, description } });
      setName('');         // Clear the form after successful submission
      setDescription('');
    } catch (e) {
      console.error("Error adding item:", e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="description" className="form-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="form-input"
          />
      </div>
      <div className="form-group">
      <button type="submit" disabled={loading} className="form-button">
        {loading ? 'Adding...' : 'Add'}
      </button>
      </div>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </form>
  );
}

export default AddItemForm;
