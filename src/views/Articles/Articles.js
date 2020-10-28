import React, { Component } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import ArticleManagement from '../../services/ArticleManagement'
import CustomTable from '../../components/CustomTable'
import Header from '../../components/Header'
import ArticleFom from './ArticleFom'

class Articles extends Component {

  tableRef = React.createRef();

  columns = [
    { title: 'Id', field: 'id', hidden:true},
    { title: 'Sku', field: 'sku'},
    { title: 'Nombre', field: 'name'},
    { title: 'Cantidad', field: 'quantity'},
    { title: 'Precio', field: 'price'},
    { title: 'Descripción', field: 'remark'},
  ];

  data = query => new Promise(async (resolve, reject) => {
    const response = await ArticleManagement.getArticles(query, this.props.token);

    resolve({
      data: response.rows,
      page: response.page - 1,
      totalCount: response.records,
    })
  })

  render() {
    return (
      <>
        <Header name={this.props.name}/>
        <Container fluid>
          <Row className="m-3">
            <Col md={4}>
              <ArticleFom/>
            </Col>
            <Col md={8}>
              <CustomTable 
                columns={this.columns} 
                data={this.data}
                ref={this.tableRef}
                onRefreshTableClicked={() => {}}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.auth.name,
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Articles);

