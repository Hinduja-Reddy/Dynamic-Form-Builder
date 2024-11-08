import axios from 'axios';

// The createForm function sends form data to the backend
export const createForm = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/forms', formData); // Adjust URL if needed
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error creating form:', error); // Log any errors
    throw error; // Re-throw the error to handle it in the component
  }
};
