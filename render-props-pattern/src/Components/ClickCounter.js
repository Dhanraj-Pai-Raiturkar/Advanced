
const ClickCounter = ({counterHandler, count}) => {
    return(
        <div>
            <button onClick={counterHandler}>Clicked {count} Times</button>
        </div>
    )
};

export default ClickCounter;