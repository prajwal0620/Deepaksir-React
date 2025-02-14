import React from "react";
import ChildFn from "./ChildFn";

const ParentFn = () => {
    return (
        <div>
            <ChildFn dataFromParent='In React, props, or properties, are objects that pass data between components. Props are similar to HTML attributes and function arguments in JavaScript'/>
        </div>
    );
    };

export default ParentFn;