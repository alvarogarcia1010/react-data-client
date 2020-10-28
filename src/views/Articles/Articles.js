import React, { Component } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import {confirmDeleteFireToast} from '../../services/helpers'
import ArticleManagement from '../../services/ArticleManagement'
import CustomTable from '../../components/CustomTable'
import Header from '../../components/Header'
import ArticleFom from './ArticleFom'

class Articles extends Component {

  tableRef = React.createRef();

  columns = [
    { title: 'Id', field: 'id', hidden:true},
    { title: 'Sku', field: 'sku', cellStyle:{textAlign:'center',padding:"8px", fontSize:"14px"}, width:80},
    { title: 'Nombre', field: 'name'},
    { title: 'Cantidad', field: 'quantity', cellStyle:{textAlign:'center',padding:"8px", fontSize:"14px"}, width:50},
    { title: 'Precio', field: 'price', cellStyle:{textAlign:'right',padding:"8px", fontSize:"14px"}, width:50},
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

  refreshTableAction = () => {
    this.tableRef.current && this.tableRef.current.onQueryChange()
  };

  confirmDeleteAction = async (event, rowData) => {
    confirmDeleteFireToast(async () => {
      
      const response = await ArticleManagement.deleteOne(rowData.id, this.props.token);

      if(response.data)
      {
        this.refreshTableAction()
      }
    }, "El artículo se ha eliminado con exito.")
  }

  render() {
    return (
      <>
        <Header name={this.props.name}/>
        <Container fluid>
          <Row className="m-3">
            <Col md={4}>
              <ArticleFom
                token={this.props.token}
                onRefreshTableClicked={this.refreshTableAction}
              />
            </Col>
            <Col md={8}>
              <CustomTable 
                columns={this.columns} 
                data={this.data}
                ref={this.tableRef}
                confirmDeleteAction={this.confirmDeleteAction}
                onEditClickedAction={() => {}}
                onRefreshTableClicked={this.refreshTableAction}
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

