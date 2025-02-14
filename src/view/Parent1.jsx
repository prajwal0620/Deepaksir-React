import React from "react";

import ChildFn1 from "./ChildFn1";

class Parent1 extends React.Component {
    render() {
        return (
            <div>
                <ChildFn1 type='Hello React'/> 
            </div>
        );
    }
}   
export default Parent1;