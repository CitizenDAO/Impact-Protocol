import { Button, Card, Col, Row, Typography } from 'antd';

export default function Citizenship({ title, description, name, nfturi }) {
  const { Title } = Typography;
  return (
    <div>
      <Row justify="center">
        <Col>
          <Card title="Pioneer Citizenship NFT" cover={<video controls loop alt="example" src={nfturi} />}>
            <Title level="4">{title}</Title>
            <p>Price: </p>
            <p>Supply: </p>
            <p>{description}</p>
            <Button size="large" style={{ width: '100%' }}>
              Mint
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
