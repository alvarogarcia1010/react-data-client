import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import {Redirect} from 'react-router-dom';
import AuthManagement from '../../services/AuthManagement'

class Logout extends Component 
{
  componentDidMount() 
  {
    AuthManagement.logout(this.props.token)
      .then(response => {
        console.log(response);
        this.props.onLogout();
      })
  }
  
  render() 
  {
    return (
      <Redirect to="/" />
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
