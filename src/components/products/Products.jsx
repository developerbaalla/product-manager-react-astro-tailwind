// Example in Products.jsx
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import FilterSort from './FilterSort';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [productNameFilter, setProductNameFilter] = useState('');
  
    // useEffect to load initial data or fetch from an API
  
    // Function to add a new product
    const addProduct = newProduct => {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    };
  
    // Function to edit an existing product
    const editProduct = (productId, updatedProduct) => {
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === productId ? { ...product, ...updatedProduct } : product
        )
      );
    };
  
    // Function to remove a product
    const removeProduct = productId => {
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    };
  
  // Function to filter products by name
  const filterProducts = nameFilter => {
    setProductNameFilter(nameFilter.toLowerCase().trim())
  };

  // Function to sort products by name
  const sortProducts = order => {
    setProducts(prevProducts => {
      const sortedProducts = [...prevProducts];
      sortedProducts.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (order === 'asc') {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
      return sortedProducts;
    });
  };
  
    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row bg-gray-100 min-h-screen">
    
          <div className="md:w-3/5 pr-4 p-4 rounded-md">
            {/* 70% width for larger screens */}
            <FilterSort filterProducts={filterProducts} sortProducts={sortProducts} />
            <ProductList products={products} removeProduct={removeProduct} productNameFilter={productNameFilter} />
          </div>
    
          <div className="md:w-2/5 mt-4 md:mt-0 p-4 rounded-md">
            {/* 30% width for larger screens */}
            <ProductForm addProduct={addProduct} />
          </div>
    
        </div>
    );
}


export default Products;