import React from "react";

export default class Comp extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
      </>
    );
  }
}
