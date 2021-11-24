import { Button, Card, Col, Row, Typography } from 'antd';

export default function Citizenship({ title, description, name, nfturi }) {
  const { Title } = Typography;
  return (
    <div>
      <Row justify="center">
        <Col>
          <Card
            style={styles}
            title="Pioneer Citizenship NFT"
            cover={<video controls loop alt="example" src={nfturi} />}
          >
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

const styles = {
  maxWidth: '480px',
  padding: '10px',
  borderRadius: '15px',
  boxShadow:
    'inset -8px -8px 12px rgb(255 255 255 / 15%), 8px 8px 30px rgb(174 174 192 / 35%), inset -8px -8px 12px rgb(255 255 255 / 15%), inset 8px 8px 8px rgb(174 174 192 / 4%)',
};
