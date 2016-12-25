import React, { Component, PropTypes } from 'react';

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const username = this.username.value.trim();
    if (!username) {
      return false;
    }
    this.props.onFormSubmit(username);
    this.username.value = '';
    return true;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <span>Search Github Users</span>
          <input type="text" ref={(c) => { this.username = c; }} className="form-control" />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  onFormSubmit: PropTypes.func,
};
export default Search;
