import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RefAClassComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection:'column'}}>
                <h3>Reference a React Component</h3>
                <input label='class component' />
                <button onClick={this.focusOnInput}>Focus</button>
            </div>
        );
    }
}

RefAClassComponent.propTypes = {

};

export default RefAClassComponent;