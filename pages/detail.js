import React from 'react'
import { Row, Col, Layout } from 'antd'
import Header from '../components/Header'

const Detail = () => (
  <Layout>
    <Header />
    <Row className="common-main" >
      <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>Left</Col>
      <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>Right</Col>
    </Row>
  </Layout>
)

export default Detail