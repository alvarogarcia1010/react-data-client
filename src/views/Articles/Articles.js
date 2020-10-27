import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import Header from '../../components/Header'

export default class Articles extends Component {
  render() {
    return (
      <>
        <Header/>
        <Container>
          <h1>Articulos</h1>
        </Container>
      </>
    )
  }
}
