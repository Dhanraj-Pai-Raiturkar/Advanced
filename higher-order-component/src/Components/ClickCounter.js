import {useState} from 'react';
import AddCounter from './AddCounter';

const ClickCounter = ({counterHandler, count}) => {
    return(
        <div>
            <button onClick={counterHandler}>Clicked {count} Times</button>
        </div>
    )
};

export default AddCounter(ClickCounter);