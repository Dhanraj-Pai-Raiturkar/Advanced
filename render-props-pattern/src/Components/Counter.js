import {Component, useState} from 'react';

const Counter = ({render}) => {    
        const [count, setCount] = useState(0);
        const incrementCounter = () => {
                setCount(prevCount => prevCount + 1);
        }
        return(
                <>
                        {render(incrementCounter, count)}
                </>
        )
};

export default Counter;