import { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";

class ParentComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vishwas',
        };
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({name: 'Vishwas'});
        }, 2000);
    }

    render(){
        console.log("********* Parent Component Rendered **********");
        const {name} = this.state;
        return(
            <>
                <RegularComponent name={name} />
                <PureComp name={name} />
            </>
        )
    }
};

export default ParentComponent;