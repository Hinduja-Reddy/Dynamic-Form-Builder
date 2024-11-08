import React, { useState } from 'react';
import axios from 'axios';

const FormBuilder = () => {
  const [formTitle, setFormTitle] = useState('');
  const [fields, setFields] = useState([]);
  const [fieldType, setFieldType] = useState('text');
  const [fieldLabel, setFieldLabel] = useState('');

  const addField = () => {
    setFields([...fields, { label: fieldLabel, type: fieldType, options: [] }]);
    setFieldLabel('');
  };

  const handleSubmit = async () => {
    const formData = { title: formTitle, fields };
    try {
      await axios.post('http://localhost:5000/api/forms/create', formData);
      alert('Form created successfully');
    } catch (error) {
      console.error('Error creating form:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Form Title"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Field Label"
          value={fieldLabel}
          onChange={(e) => setFieldLabel(e.target.value)}
        />
        <select onChange={(e) => setFieldType(e.target.value)}>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
          <option value="file">File</option>
          <option value="radio">Radio</option>
          <option value="checkbox">Checkbox</option>
        </select>
        <button onClick={addField}>Add Field</button>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit Form</button>
      </div>
    </div>
  );
};

export default FormBuilder;
