import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import Header from '../../components/Header'

class Articles extends Component {
  render() {
    return (
      <>
        <Header name={this.props.name}/>
        <Container>
          <h1>Articulos</h1>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.auth.name,
  }
}

export default connect(mapStateToProps)(Articles);

