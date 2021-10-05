import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Divider, 
  Row, 
  Col, 
  Typography, 
  InputNumber, 
  Button, 
  Space,
  Table,
  List,
  Skeleton,
  Menu,
} from 'antd';
import Balance from './Balance';
import { useBalance } from "eth-hooks";
const { utils } = require("ethers");

export default function Bond({
  purpose,
  setPurposeEvents,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  const { Title } = Typography;

  const [ethBondAmount, setEthBondAmount] = useState(0)

  // useEffect(() => {
  //     setEthBondAmount(yourLocalBalance);
  //     console.log(yourLocalBalance)
  // },[ethBondAmount])

  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute('bond');
  }, [setRoute]);

  // const updateRoute = function(route) {
  //   useEffect(() => {
  //     setRoute(route);
  //   }, [setRoute]);
  // }

  function BondCard(props) {
    const route = props.route
    switch(route) {
      case 'bond':
        return (
          <Card title="Bond" bordered={false}>
            <Row>
              <Col flex={3}>
                <Title level={4}>Bond Price</Title>
                <Title level={5}>
                  $ <Skeleton.Button active={true} size='small' shape='default' />
                </Title>
              </Col>
              <Col flex={3}>
                <Title level={4}>Market Price</Title>
                <Title level={5}>$ <Skeleton.Button active={true} size='small' shape='default' /></Title>
              </Col>
            </Row>
            <Divider orientation="left">Bond Purchase</Divider>
            <Row>
              <Col flex={1}>
                <Space direction="vertical" style={{width: '100%'}}>
                <Row>
                  <Col flex={5}>
                    <InputNumber type="number" style={{width: '100%'}} addonBefore="+" addonAfter="$" size="large" value={ethBondAmount} />
                  </Col>
                  <Col flex={2}>
                    <Button size="large" style={{width: '100%'}} onClick={() => {setEthBondAmount(utils.formatEther(yourLocalBalance))}}>Max</Button>
                  </Col>
                </Row>
                <Button type="primary" size="large" block onClick={() => { 
                  tx(writeContracts.CitizenFixedBond.mint({

                  })); 
                  console.log(writeContracts);
                }}>
                  Mint
                </Button>
                </Space>
              </Col>
            </Row>
            <Divider orientation="left">Overview</Divider>
            <List>
              <List.Item key={1}>
                <List.Item.Meta
                  style={{textAlign: 'left'}}
                  title={<p>Your Balance</p>}
                />
                <div>{yourLocalBalance ? utils.formatEther(yourLocalBalance) : <Skeleton.Button active={true} size='small' shape='default' />}</div>
              </List.Item>
              <List.Item key={2}>
                <List.Item.Meta
                  style={{textAlign: 'left'}}
                  title={<p>You Will Get</p>}
                />
                <div><Skeleton.Button active={true} size='small' shape='default' /> CDAO</div>
              </List.Item>
              <List.Item key={3}>
                <List.Item.Meta
                  style={{textAlign: 'left'}}
                  title={<p>ROI</p>}
                />
                <div><Skeleton.Button active={true} size='small' shape='default' /> %</div>
              </List.Item>
              <List.Item key={4}>
                <List.Item.Meta
                  style={{textAlign: 'left'}}
                  title={<p>Vesting Term</p>}
                />
                <div><Skeleton.Button active={true} size='small' shape='default' /> Days</div>
              </List.Item>
            </List>
          </Card>
        )
      case 'redeem':
        return (
          <Card title="Redeem">
            <Button type="primary" size="large" block onClick={() => {
              tx(writeContracts.CitizenFixedBond.canClaim({

              })); 
            }}>Claim</Button>
            <List>
            <List.Item key={1}>
                <List.Item.Meta
                  style={{textAlign: 'left'}}
                  title={<p>Pending CDAO</p>}
                />
                <div>{yourLocalBalance ? utils.formatEther(yourLocalBalance): <Skeleton.Button active={true} size='small' shape='default' />}</div>
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  style={{textAlign: 'left'}}
                  title={<p>Claimable CDAO</p>}
                />
                <div>{yourLocalBalance ? utils.formatEther(yourLocalBalance) : <Skeleton.Button active={true} size='small' shape='default' />}</div>
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  style={{textAlign: 'left'}}
                  title={<p>Time until fully vested</p>}
                />
                <div>{yourLocalBalance ? utils.formatEther(yourLocalBalance) : <Skeleton.Button active={true} size='small' shape='default' />}</div>
              </List.Item>
            </List>
          </Card>
        )
      default: return <Card title="DEFAULT">{route}</Card>
    }
  }

  
  return (
    <div>

      <Menu style={{ textAlign: "center" }} selectedKeys={route} mode="horizontal">
        <Menu.Item key="bond" onClick={() => setRoute('bond')}>
          Bond
        </Menu.Item>
        <Menu.Item key="redeem" onClick={() => setRoute('redeem')}>
          Redeem
        </Menu.Item>
      </Menu>
  
      <BondCard route={route}></BondCard>

    </div>
  )
}