import React, { Component, PropTypes } from 'react';

class Repo extends Component {
  render() {
    return (
      <div>
        <li className="list-group-item">
          <a href={this.props.repo.html_url} >
            {this.props.repo.name}
          </a>
          :{this.props.repo.description}
        </li>
      </div>
    );
  }
}

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    html_url: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Repo;
