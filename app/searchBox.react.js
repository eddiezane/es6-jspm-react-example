import React from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let value = React.findDOMNode(this.refs.search).value;
    this.props.onSubmitCallback(value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="search" placeholder="Enter search term then press enter" style={{width: "100%", height: "24px"}}/>
      </form>
    );
  }
}
