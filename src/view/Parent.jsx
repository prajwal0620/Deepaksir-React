import React , {Component} from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <div>
        <Child dataFromParent='In React, props, or properties, are objects that pass data between components. Props are similar to HTML attributes and function arguments in JavaScript'/>
      </div>
    );
  }
}
export default Parent;