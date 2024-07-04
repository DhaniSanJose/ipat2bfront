import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
const ItemForm = ({ item, onSuccess }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        if (item) {
            setName(item.name);
            setDescription(item.description);
         }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { name, description };
        try {
            if (item) {
            await
            axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
        } else {
            await
            axios.post(`http://localhost:8000/api/items/`, data);
        }
        onSuccess();
            } catch (error) {
                console.error('There was an error submitting the form!', error);
                }
            };
            return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => 
                    setName(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => 
                    setDescription(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
 </form>
 );
};
export default ItemForm;