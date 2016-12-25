import React, { Component, PropTypes } from 'react';
import Repo from './Repo';
//  {...this.props}
class RepoList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.userRepos.map(repo => <Repo repo={repo} key={repo.id} />)}
        </ul>
      </div>
    );
  }
}

RepoList.propTypes = {
  userRepos: PropTypes.array.isRequired,
};

export default RepoList;
