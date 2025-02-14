import React , {Component}from "react";

class Child1 extends Component {
    render() {
        return (
            <div>
                Class Component : {this.props.type}
            </div>
        );
    }
}
export default Child1 ;