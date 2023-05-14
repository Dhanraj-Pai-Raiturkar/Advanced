import React from 'react';
import { useRef } from 'react';

function RefDemoFunctionalComponent(props) {

    const inputRef = useRef();

    const handleClick = (event) => {
        console.log("Functional component ref:",inputRef);
        inputRef.current.focus();
    }

    return (
        <div>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <h3>Functional Component Ref (useRef)</h3>
                <input label='Functional component' ref={inputRef} />
                <button onClick={handleClick}>Focus</button>
                <span>on click see console to view ref object</span>
            </div>
        </div>
    );
}

export default RefDemoFunctionalComponent;