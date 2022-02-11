import { Col, Row, Typography } from 'antd';

export default function YourBondView({ sector }) {
  const { Title } = Typography;
  return (
    <Row justify="center" align="middle" style={{ height: '50%' }}>
      <Col>
        <Typography>
          <Title level={3}>Ooops... looks like you don't have any bonds...</Title>
        </Typography>
      </Col>
    </Row>
  );
}
