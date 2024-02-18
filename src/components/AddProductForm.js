import React, { useState } from 'react';
import './AddProductForm.css';

function AddProductForm({ onAdd }) {
    const [name, setName] = useState('');
    const [quantity, setQunatity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, quantity: parseInt(quantity, 10) || 0});
        setName('');
        setQunatity('');
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='input'
            />
            <input
                type="number"
                placeholder='Quantity'
                value={quantity}
                onChange={(e) => setQunatity(e.target.value)}
                required
                className='input'
            />
            <button type="submit" className='button'>Add Product</button>
        </form>
    )
}

export default AddProductForm;