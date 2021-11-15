import { Col, Row } from 'antd';
import React from 'react';
import InitiativesDetails from '../../components/InitiativesDetails';

export default function InitiativesView({}) {
  return (
    <>
      <Row>
        <Col sm={24} md={4} lg={6}>
          <InitiativesDetails />
        </Col>
        <Col sm={24} md={20} lg={18}>
          <InitiativesChart />
        </Col>
      </Row>
    </>
  );
}
