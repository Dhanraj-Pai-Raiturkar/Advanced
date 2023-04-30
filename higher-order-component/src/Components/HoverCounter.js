import AddCounter from './AddCounter';

const HoverCounter = ({counterHandler, count}) => {
    return(
        <div>
            <h2 onMouseOver={(counterHandler)}>Hovered {count} Times</h2>
        </div>
    )
};

export default AddCounter(HoverCounter);