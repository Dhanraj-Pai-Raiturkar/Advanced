import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForwardRef from './ForwardRef';

class ForwardRefParent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    render() {
        return (
            <div>
                <ForwardRef ref={this.inputRef}/>
                <button onClick={(event) => this.inputRef.current.focus()}>Focus</button>
            </div>
        );
    }
}

ForwardRefParent.propTypes = {

};

export default ForwardRefParent;