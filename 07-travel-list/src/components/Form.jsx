import { useState } from 'react';

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };

        onAddItems(newItem);
        setDescription('');
        setQuantity(1);
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            {quantity}
            <h3>What do you need for your 😍 trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>

            <input
                type='text'
                placeholder='Item...'
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <button>Add</button>
        </form>
    );
}
