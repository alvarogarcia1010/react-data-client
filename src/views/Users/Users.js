import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../../components/Header'

class Users extends Component {
  render() {
    return (
      <div>
        <Header name={this.props.name}/>
        <h1>Usuarios</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.auth.name,
  }
}

export default connect(mapStateToProps)(Users);
