import { Card, Typography, Button, Row, Col, InputNumber, Space } from "antd";
import { useLocalStorage } from "../hooks";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function BondBuilder({ title, season, APY, CDAO }) {
  const { Title } = Typography;
  const { selectBondMaturity, bondMaturity, bondAPY, setETHBondAmount, ETHBondAmount } = useContext(GlobalContext);
  // const [bondMaturity, setBondMaturity] = useState(30);

  function onChangeEthInput(val) {
    setETHBondAmount(val);
  }

  function onSelectBondMaturity(val) {
    selectBondMaturity(val);
  }

  const bondMaturityOptions = [30, 60, 90, 180, 360];

  function Options({ bondMaturity }) {
    console.log('display options: ', bondMaturity)
    return bondMaturityOptions.map(n => (
      <Button
        key={n.toString()}
        type={n == bondMaturity ? "primary" : null}
        value={n}
        onClick={() => onSelectBondMaturity(n)}
      >
        {n}
      </Button>
    ));
  }

  return (
    <Card style={{ textAlign: "left" }}>
      <Row>
        <Col lg={12}>
          <Title level={2}>{title}</Title>
          <Title level={5}>{season}</Title>
          <p>Current APY: {APY}%</p>
          <p>CDAO left: {CDAO}</p>
          <p>
            Amount of ETH to bond:
            <span>
              <InputNumber
                type="number"
                style={{ width: "100%" }}
                size="large"
                value={ETHBondAmount}
                onChange={onChangeEthInput}
              />
            </span>
          </p>
          <p>
            Days until bond maturity:
            <br />
            <span>
              <Space>
                <Options bondMaturity={bondMaturity} />
              </Space>
            </span>
          </p>
          <Button style={{ width: "100%" }}>Bond now</Button>
        </Col>
        <Col lg={12}></Col>
      </Row>
    </Card>
  );
}
