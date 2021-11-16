import { Col, Row } from 'antd';
import React from 'react';
import InitiativesChart from '../../components/InitiativesChart';
import InitiativesDetails from '../../components/InitiativesDetails';

export default function InitiativesView({}) {
  return (
    <>
      <Row style={{ gap: 20 }}>
        <Col sm={24} md={4} lg={6}>
          <InitiativesDetails />
        </Col>

        <Col sm={24} md={20} lg={17}>
          <InitiativesChart />
        </Col>
      </Row>
    </>
  );
}
