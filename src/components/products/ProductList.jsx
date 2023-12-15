// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, removeProduct, productNameFilter }) => {

  return (
    <div className="mb-8 p-4 pb-15 border border-neutral-400 rounded-md bg-white text-black">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Brand</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.filter(product => product.name.toLowerCase().includes(productNameFilter)).map(product => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">{product.brand}</td>
              <td className="py-2 px-4 border-b">{product.desc}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-800 font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

