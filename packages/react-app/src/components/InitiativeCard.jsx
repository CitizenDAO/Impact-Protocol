import { Button, Card, Col, List, Row, Typography } from 'antd';
import { capitalize } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

// displays a page header

export default function InitiativeCard({
  header,
  subHeader,
  CTAText,
  CTALink,
  initiativeData,
  headerImg,
  description,
}) {
  const { Title, Text } = Typography;
  return (
    <Card style={{ width: 'auto' }}>
      <Row className="mb-1">
        <Col span={24}>
          <img class="br-15" style={{ width: '100%' }} src={headerImg} />
        </Col>
      </Row>
      <Row className="mb-1">
        <Col span={24}>
          <Title level={3} style={{ textAlign: 'left' }}>
            {header}
          </Title>
          <Title level={5}>{subHeader}</Title>
        </Col>
        <Col>
          <Text>{description}</Text>
        </Col>
      </Row>
      {/* <Divider /> */}
      {initiativeData ? (
        <List
          style={{ textAlign: 'left' }}
          grid={{ gutter: 24, sm: 1, md: 1, lg: 2 }}
          dataSource={initiativeData}
          renderItem={item => (
            <List.Item>
              <Title level={5}>
                <b>{item.value}</b>
              </Title>
              {capitalize(item.text)}
            </List.Item>
          )}
        />
      ) : null}
      <Link to={CTALink}>
        <Button size="large" block>
          {CTAText}
        </Button>
      </Link>
    </Card>
  );
}
