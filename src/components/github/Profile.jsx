import React, { Component, PropTypes } from 'react';
import RepoList from './RepoList';

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"> {this.props.userData.login} </h3>
          </div>
          <div className="panel-body">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={this.props.userData.avatar_url}
                    alt={this.props.userData.login}
                    className="thumbnail"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      <span className="label label-primary">
                        {this.props.userData.public_repos} Repos
                      </span>
                      <span className="label label-success">
                        {this.props.userData.public_gists} Gists
                      </span>
                      <span className="label label-info">
                        {this.props.userData.followers} Followers
                      </span>
                      <span className="label label-danger">
                        {this.props.userData.following} Following
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <strong>Username: </strong>{this.props.userData.login}
                        </li>
                        <li className="list-group-item">
                          <strong>Location: </strong>{this.props.userData.location}
                        </li>
                        <li className="list-group-item">
                          <strong>Email: </strong>{this.props.userData.email}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  <a
                    href={this.props.userData.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn btn-primary"
                  >Visit profile</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h3>User Repositories</h3>
          <RepoList userRepos={this.props.userRepos} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  userData: PropTypes.object,
  userRepos: PropTypes.array.isRequired,
};

export default Profile;
