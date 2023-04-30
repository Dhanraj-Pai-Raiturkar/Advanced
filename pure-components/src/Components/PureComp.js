import { PureComponent } from "react";

class PureComp extends PureComponent{
    constructor(props) {
        super(props);
    }

    render(){
        console.log("********* Pure Component Rendered **********");
        return(
            <h1>{this.props.name}</h1>
        )
    }
};

export default PureComp;