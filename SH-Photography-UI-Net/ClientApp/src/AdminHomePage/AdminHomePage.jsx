/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MetaTags from 'react-meta-tags';
import { userActions } from '../_actions';

class AdminHomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return e => this.props.dispatch(userActions.delete(id));
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6">
        <MetaTags>
          <title>Stuart Hopwood Photography User Home</title>
          <meta property="og:title" content="Stuart Hopwood Photography User Home"/>
          <meta name="description" content="Home page for Stuart Hopwood Photography users."/>
        </MetaTags>
        <h1>Hi {user.firstName}!</h1>
        <p>You're logged in with React!!</p>
        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        {users.items && (
          <ul>
            {users.items.map((user, index) => (
              <li key={user.id}>
                {user.firstName + ' ' + user.lastName}
                {user.deleting ? (
                  <em> - Deleting...</em>
                ) : user.deleteError ? (
                  <span className="text-danger">
                    {' '}
                    - ERROR: {user.deleteError}
                  </span>
                ) : (
                  <span>
                    {' '}
                    - <button className="btn btn-link" onClick={this.handleDeleteUser(user.id)}>Delete</button>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedAdminHomePage = connect(mapStateToProps)(AdminHomePage);
export { connectedAdminHomePage as AdminHomePage };
