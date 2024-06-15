import React from 'react';

const CategoryCard = ({ name, image, description }) => {
    return (
        <div className="category-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            
        </div>
    );
}

export default CategoryCard;
