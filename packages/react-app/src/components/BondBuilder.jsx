import { Button, Col, InputNumber, Row, Space, Typography } from 'antd';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { CardStyled } from './Card/Card.styled';

export default function BondBuilder({ title, season, description, APY, CDAO }) {
  const { Title, Text } = Typography;
  const {
    selectBondMaturity,
    bondMaturity,
    bondAPY,
    setETHBondAmount,
    ETHBondAmount,
    CDAOPriceDollar,
    CDAOPriceETH,
    initCDAO,
    setInitCDAO,
  } = useContext(GlobalContext);
  // const [bondMaturity, setBondMaturity] = useState(30);

  function onChangeEthInput(val) {
    console.log(val);
    setETHBondAmount(val);
    setInitCDAO(val / CDAOPriceETH);
    console.log(val / CDAOPriceETH);
  }

  function onSelectBondMaturity(val) {
    selectBondMaturity(val);
  }

  const bondMaturityOptions = [30, 60, 90, 180, 360];

  function Options({ bondMaturity }) {
    console.log('display options: ', bondMaturity);
    return bondMaturityOptions.map(n => (
      <Button
        key={n.toString()}
        style={{ marginRight: '6px' }}
        type={n == bondMaturity ? 'primary' : null}
        value={n}
        onClick={() => onSelectBondMaturity(n)}
      >
        {n}
      </Button>
    ));
  }

  return (
    <CardStyled style={styles.card}>
      <Row justify="space-between">
        <Col lg={12}>
          <Title level={2}>{title}</Title>
          <Title level={5}>{season}</Title>
          <p>{description}</p>
        </Col>
        <Col lg={12}>
          <Row style={styles.card} gutter={[24, 24]}>
            <Col lg={8}>
              <Text type="secondary">Current APY</Text>
              <br />
              <Text strong>{bondAPY}%</Text>
            </Col>
            <Col lg={8}>
              <Text type="secondary">CDAO Left</Text>
              <br />
              <Text strong>69,420,522</Text>
            </Col>
            <Col lg={8}>
              <Text type="secondary">CDAO Price</Text>
              <br />
              <Text strong>{CDAOPriceDollar}</Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Space direction="vertical">
            <p>Amount of ETH to bond:</p>
            <InputNumber
              type="number"
              style={{ width: '100%' }}
              size="large"
              value={ETHBondAmount}
              onChange={onChangeEthInput}
            />
            <p>Days until bond maturity:</p>
            <Options bondMaturity={bondMaturity} />
            <Button type="secondary" style={{ width: '100%' }}>
              Bond now
            </Button>
          </Space>
        </Col>
        <Col lg={8}></Col>
      </Row>
    </CardStyled>
  );
}

const styles = {
  card: {
    padding: '10px',
    borderRadius: '15px',
    boxShadow:
      'inset -8px -8px 12px rgb(255 255 255 / 15%), 8px 8px 30px rgb(174 174 192 / 35%), inset -8px -8px 12px rgb(255 255 255 / 15%), inset 8px 8px 8px rgb(174 174 192 / 4%)',
  },
};
