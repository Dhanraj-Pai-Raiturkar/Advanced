import {Component, useState} from 'react';

const AddCounter = (WrappedComponent) => {    
        return class WrapperComponent extends Component{
                constructor(props){
                        super(props);
                        this.state = {
                                count: 0,
                        };
                        // this.incrementCount = this.incrementCount.bind(this);
                }

                incrementCount = () => {
                        console.log("arrow function this:",this)
                        this.setState({count: this.state.count + 1});
                }

                render(){
                        return <WrappedComponent counterHandler={this.incrementCount} count={this.state.count} {...this.props} />
                }
        }
};

export default AddCounter;