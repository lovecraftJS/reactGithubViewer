import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import Profile from './github/Profile';
import Search from './github/Search';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: 'lovecraftJS',
      userData: {},
      userRepos: [],
      perPage: 5,
    };
    this.getUserData = this.getUserData.bind(this);
    this.getUserRepos = this.getUserRepos.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.success = this.success.bind(this);
    // this.error = this.error.bind(this);
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  getUserData() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
      dataType: 'json',
      cache: false,
      success: function (userData) {
        this.setState({ userData });
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({ username: null });
      }.bind(this),
    });
  }

  getUserRepos() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`,
      dataType: 'json',
      cache: false,
      success: function (userRepos) {
        this.setState({ userRepos });
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({ username: null });
      }.bind(this),
    });
  }

  handleFormSubmit(username) {
    this.setState({ username }, function () {
      this.getUserData();
      this.getUserRepos();
    });
  }

  render() {
    return (
      <div>
        <Search onFormSubmit={this.handleFormSubmit} />
        <Profile {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string,
};

App.defaultProps = {
  clientId: 'ec44907e2c8415d8d0b1',
  clientSecret: 'db5f8e268b476e975b7973deab2f9bf38b5596b9',
};

export default App;
