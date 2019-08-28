import React from "react";
import UserListItem from './UserListItem';
import { connect } from 'react-redux';

function UserListing(props) {
  return <div>
    {
      props.users.map( user => 
        <UserListItem user={user} />)
    }
  </div>
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: user => {
      dispatch({ type: 'GET_USERS', payload: user })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);