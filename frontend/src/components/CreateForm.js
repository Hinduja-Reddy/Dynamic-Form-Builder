import React, { useState } from 'react';
import { createForm } from '../api'; // Import the createForm function from the api.js

const CreateForm = () => {
  const [formData, setFormData] = useState({ title: '', fields: [] });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit action
    try {
      const newForm = await createForm(formData); // Call the createForm function
      console.log('Form created:', newForm); // Log the newly created form
    } catch (error) {
      console.error('Error creating form:', error); // Catch and log any errors
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Handle form submission */}
      <input
        type="text"
        placeholder="Form title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <button type="submit">Create Form</button> {/* Trigger form submission */}
    </form>
  );
};

export default CreateForm;
