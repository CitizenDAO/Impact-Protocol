import { Button, Col, InputNumber, Row, Space, Typography } from 'antd';
import { utils } from 'ethers';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { CardStyled } from './Card/Card.styled';

export default function BondBuilder({
  title,
  season,
  description,
  APY,
  CDAO,
  selectedProvider,
  writeContracts,
  poolId,
}) {
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
    bondContractAddress,
  } = useContext(GlobalContext);
  // const [bondMaturity, setBondMaturity] = useState(30);

  const [isMinting, setIsMinting] = useState(false);

  const onMintBondClick = async () => {
    setIsMinting(true);

    try {
      let response = await writeContracts.CitizenNFTBond.purchaseBond(0, 1000, {
        value: utils.parseEther('0.1'),
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }

    setIsMinting(false);
  };

  function onChangeEthInput(val) {
    if (val >= 0) {
      setETHBondAmount(val);
      setInitCDAO(val / CDAOPriceETH);
    }
  }

  function onSelectBondMaturity(val) {
    selectBondMaturity(val);
  }

  const bondMaturityOptions = [60, 90, 180, 365];
  const ethOptions = [0.1, 1, 10, 100];

  function Options({ bondMaturity }) {
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

  const EthOptions = ({ selectedOption }) => {
    return ethOptions.map(n => (
      <Button
        key={n}
        style={{ marginRight: '6px' }}
        type={n == selectedOption ? 'primary' : null}
        value={n}
        onClick={() => onChangeEthInput(n)}
      >
        {n}
      </Button>
    ));
  };

  return (
    <CardStyled style={styles.card}>
      <Row justify="space-between" gutter={[24, 24]}>
        <Col lg={12}>
          <Title level={2}>{title}</Title>
          <Title level={5}>{season}</Title>
          <p>{description}</p>
        </Col>
        <Col lg={12}>
          <Row style={styles.card} gutter={[24, 24]} className="mb-1">
            <Col lg={12}>
              <Text type="secondary">Current APY</Text>
              <br />
              <Text strong>{bondAPY}%</Text>
            </Col>
            <Col lg={12}>
              <Text type="secondary">CDAO Left</Text>
              <br />
              <Text strong>69,420,522</Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Space direction="vertical">
            <p>Choose an amount of ETH to invest:</p>
            <EthOptions selectedOption={ETHBondAmount} />
            <InputNumber
              type="number"
              min={0}
              style={{ width: '100%' }}
              size="large"
              value={ethOptions.includes(ETHBondAmount) ? undefined : ETHBondAmount}
              onChange={onChangeEthInput}
              placeholder="or custom amount"
            />
            <p>Select days until bond maturity:</p>
            <Options bondMaturity={bondMaturity} />
            <Button type="secondary" style={{ width: '100%' }} onClick={onMintBondClick} loading={isMinting}>
              Mint Bond
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
