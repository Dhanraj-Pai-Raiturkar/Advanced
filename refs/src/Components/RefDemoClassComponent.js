import React, { Component } from 'react';

class RefDemoClassComponent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleClick = (event) => {
        console.log("class component ref:",this.inputRef);
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection:'column'}}>
                <h3>Class Component Ref (React.CreateRef)</h3>
                <input label='class component' ref={this.inputRef} />
                <button onClick={this.handleClick}>Focus</button>
                <span>on click see console to view ref object</span>
            </div>
        );
    }
}

export default RefDemoClassComponent;