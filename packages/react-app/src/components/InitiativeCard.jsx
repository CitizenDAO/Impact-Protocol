import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default function InitiativeCard({ header, CTAText, CTALink, headerImg, description, onClick }) {
  const { Title, Text } = Typography;
  return (
    <Card cover={<img alt="initiative-image" src={headerImg} />}>
      <Row>
        <Col>
          <Title level={3} style={{ textAlign: 'left' }}>
            {header}
          </Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text type="secondary">{description}</Text>
        </Col>
      </Row>
      <Row justify="end" style={{ paddingTop: '24px' }}>
        <Col>
          <Link style={{ fontWeight: 600 }} to={CTALink}>
            {CTAText}
          </Link>
        </Col>
      </Row>
    </Card>
  );
}
