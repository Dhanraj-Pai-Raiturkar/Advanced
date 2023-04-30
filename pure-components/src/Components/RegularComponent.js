import { PureComponent, Component } from "react";

class RegularComponent extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        console.log("********* Regular Component Rendered **********");
        return(
            <h1>{this.props.name}</h1>
        )
    }
};

export default RegularComponent;