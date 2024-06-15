import React from 'react';
import './style.css';
import CategoryCard from './CategoryCard';

const categories = [
    {id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150', description: 'Gadgets and devices' },
    { id: 2, name: 'Fashion', image: 'https://via.placeholder.com/150', description: 'Clothing and accessories' },
    { id: 3, name: 'Home & Kitchen', image: 'https://via.placeholder.com/150', description: 'Furniture and appliances' },
    { id: 4, name: 'Sports', image: 'https://via.placeholder.com/150', description: 'Sporting goods and outdoor' },
    { id: 5, name: 'Books', image: 'https://via.placeholder.com/150', description: 'Books and stationery' },

    { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150', description: 'Gadgets and devices' },
    { id: 2, name: 'Fashion', image: 'https://via.placeholder.com/150', description: 'Clothing and accessories' },
    { id: 3, name: 'Home & Kitchen', image: 'https://via.placeholder.com/150', description: 'Furniture and appliances' },
    { id: 4, name: 'Sports', image: 'https://via.placeholder.com/150', description: 'Sporting goods and outdoor' },
    { id: 5, name: 'Books', image: 'https://via.placeholder.com/150', description: 'Books and stationery' },
];

const Categories = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Product Categories</h1>
            </div>
            <div className="categories">
                {categories.map(category => (
                    <CategoryCard 
                        key={category.id} 
                        name={category.name} 
                        image={category.image} 
                        description={category.description} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Categories;
