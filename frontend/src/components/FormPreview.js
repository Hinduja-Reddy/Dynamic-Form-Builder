import React from 'react';

const FormPreview = ({ form }) => {
  return (
    <form>
      <h3>{form.title}</h3>
      {form.fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input type={field.type} />
        </div>
      ))}
    </form>
  );
};

export default FormPreview;
