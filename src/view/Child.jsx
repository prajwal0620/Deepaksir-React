import React , {Component} from "react";

class Child extends Component {
  render() {
    return (
      <div>
        We Are Learning PROPS in Class : {this.props.dataFromParent}
      </div>
    );
  }
}
export default Child;