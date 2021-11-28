import { Button, Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

export default function YourBondView({ sector }) {
  const { Text, Title } = Typography;
  return (
    <Row>
      <Col>
        <Card>
          <Title>Your Bonds</Title>
          <Text className="text-size-md">Looks like you dont have any bonds yet.</Text>
          <Row>
            <Link to="/goals">
              <Button size="large" type="primary">
                Invest in Goals
              </Button>
            </Link>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
