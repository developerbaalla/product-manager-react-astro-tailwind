// src/components/ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    brand: '',
    desc: '',
  });

  const [emptyFields, setEmptyFields] = useState({
    name: false,
    category: false,
    brand: false,
    desc: false,
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear empty field notification when the user starts typing in a field
    setEmptyFields({
      ...emptyFields,
      [e.target.name]: false,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Check for empty fields
    const newEmptyFields = {};
    let hasEmptyField = false;

    Object.keys(formData).forEach(field => {
      if (formData[field].trim() === '') {
        newEmptyFields[field] = true;
        hasEmptyField = true;
      } else {
        newEmptyFields[field] = false;
      }
    });

    setEmptyFields(newEmptyFields);

    // If any field is empty, do not submit
    if (hasEmptyField) {
      return;
    }

    // Add validation if needed
    addProduct(formData);

    // Reset form data
    setFormData({
      name: '',
      category: '',
      brand: '',
      desc: '',
    });
  };

  return (
    <div className="mb-8 p-4 border border-neutral-400 rounded-md bg-white text-black">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border p-2 ${emptyFields.name ? 'border-red-500' : ''}`}
            required
          />
          {emptyFields.name && (
            <p className="text-red-500 text-sm mt-1">Name cannot be empty</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full border p-2 ${emptyFields.category ? 'border-red-500' : ''}`}
            required
          />
          {emptyFields.category && (
            <p className="text-red-500 text-sm mt-1">Category cannot be empty</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className={`w-full border p-2 ${emptyFields.brand ? 'border-red-500' : ''}`}
            required
          />
          {emptyFields.brand && (
            <p className="text-red-500 text-sm mt-1">Brand cannot be empty</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Description:</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className={`w-full border p-2 ${emptyFields.desc ? 'border-red-500' : ''}`}
            required
          />
          {emptyFields.desc && (
            <p className="text-red-500 text-sm mt-1">Description cannot be empty</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
