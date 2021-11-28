import { Card, Col, Row, Typography } from 'antd';

export default function YourBondView({ sector }) {
  const { Text, Title } = Typography;
  return (
    <Row>
      <Col>
        <Card>
          <Title>Your Bonds</Title>
        </Card>
      </Col>
    </Row>
  );
}
