import { Row, Typography } from 'antd';
import React from 'react';

const descriptions = [
  { title: 'Planting Trees', content: "Working with Terraformation, we're planting as many trees as possible." },
  {
    title: 'Preserving Rainforests',
    content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
  },
  {
    title: 'Converting Waste to Graphene',
    content: 'A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.',
  },
];

export default function InitiativesDetails({ route, pageDescription = descriptions }) {
  const { Text, Title } = Typography;

  return (
    <Row>
      <Text type="secondary">$Climate bonds sold during Season 1 will fund the following projects:</Text>

      <List
        dataSource={pageDescription}
        renderItem={(item, i) => (
          <List.Item key={i}>
            <Title level={3}>{item.title}</Title>
            <Text>{item.content}</Text>
          </List.Item>
        )}
      />
    </Row>
  );
}
