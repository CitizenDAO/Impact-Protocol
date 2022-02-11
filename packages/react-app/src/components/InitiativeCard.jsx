import { Card, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CTA = styled(Link)`
  font-weight: 600;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export default function InitiativeCard({ header, CTAText, CTALink, headerImg, description, onClick }) {
  const { Title, Text } = Typography;
  return (
    <Card cover={<img alt="initiative-image" src={headerImg} />}>
      <Space direction="vertical">
        <Title level={3} style={{ textAlign: 'left' }}>
          {header}
        </Title>
        <Text type="secondary">{description}</Text>
        <CTA to={CTALink}>{CTAText}</CTA>
      </Space>
    </Card>
  );
}
