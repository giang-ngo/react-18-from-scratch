import './App.css';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const addToCount = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const subFromCount = () => {
        if (count >0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h4>The current count is...</h4>
            <h1>{count}</h1>
            <button onClick={subFromCount}>-</button>
            <button onClick={addToCount}>+</button>
        </div>
    );
}

export default App;
