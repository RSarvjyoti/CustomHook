import React from 'react';

import usePrevious from '../hooks/use-previous';
import useCounter from '../hooks/use-counter';


const Counter1 = () => {
    const [count, handleCount] = useCounter(0)
    const prevCount = usePrevious(count); 

    return (
        <div>
            <button onClick={handleCount}>Click me {count}</button>
            <p>Previous count: {prevCount}</p> 
        </div>
    );
};

export default Counter1;
