import React from 'react';

const ForwardRef = React.forwardRef((props, fwRef) => {

    return (
        <div>
            <h1>Forward Refs</h1>
            <input label='forward ref' ref={fwRef}/>
        </div>
    );
})

export default ForwardRef;