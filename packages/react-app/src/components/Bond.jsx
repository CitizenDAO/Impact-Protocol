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
  Progress,
  Slider
} from 'antd';
import Balance from './Balance';
import { useBalance } from "eth-hooks";
import { useLocalStorage } from '../hooks';
const { utils } = require("ethers");

export default function Bond({
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

  
 


  const [route, setRoute] = useState('bond');


  function BondCard(props) {
    const [ethBondAmount, setEthBondAmount] = useLocalStorage("ethBondAmount", 0)
    const [remainingSupply, setRemainingSupply] = useLocalStorage("remainingSupply", 25);
    const [totalSupply, setTotalSupply] = useLocalStorage("totalSupply", 100);
    const [vestingTerm, setVestingTerm] = useLocalStorage("vestingTerm", 0);
    const marks = {
      0: '10',
      25: '30',
      50: '60',
      75: '180',
      100: '360'
    };

    console.log('vesting term', vestingTerm)
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
              <Title level={5}>{remainingSupply} / {totalSupply} CDAO is remaining</Title>
              <Progress
                strokeColor={{
                  '0%': '#83eb34',
                  '100%': '#4287f5',
                }}
                strokeWidth={50}
                percent={(remainingSupply / totalSupply) * 100}
              />
            </Row>
            <Divider dashed />
            <Title style={{textAlign: 'left'}} level={5}>Select days until bond maturity:</Title>
            <Slider onChange={(value) => { setVestingTerm(value) }} marks={marks} step={null} defaultValue={10} tooltipVisible={false} value={vestingTerm}/>
            <Divider dashed />
            <Row>
              <Col flex={1}>
                <Space direction="vertical" style={{width: '100%'}}>
                <Title level={5} style={{textAlign: 'left'}}>How much Eth do you want to invest?</Title>
                <p style={{textAlign: 'left'}}>Your Eth Balance: Ξ {yourLocalBalance ? utils.formatEther(yourLocalBalance) : <Skeleton.Button active={true} size='small' shape='default' />}</p>
                <Row>
                  <Col flex={5}>
                    <InputNumber type="number" style={{width: '100%'}} size="large" value={ethBondAmount} onChange={(val) => setEthBondAmount(val)}/>
                  </Col>
                  <Col flex={2}>
                    <Button size="large" style={{width: '100%'}} onClick={() => {setEthBondAmount(utils.formatEther(yourLocalBalance))}}>Max</Button>
                  </Col>
                </Row>
                <Button type="primary" size="large" block onClick={() => { 
                  tx(writeContracts.CitizenFixedBond.mint({
                    address: address
                  })); 
                  console.log(writeContracts);
                }}>
                  Mint
                </Button>
                </Space>
              </Col>
            </Row>
            <Divider orientation="left">Overview</Divider>
            <p>3 Eth will give you 3,000,000 CDAO after x days</p>
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
                <div>
                  { vestingTerm ? null : <Skeleton.Button active={true} size='small' shape='default' /> }
                  {marks[vestingTerm]} Days
                </div>
              </List.Item>
            </List>
          </Card>
        )
      case 'redeem':
        return (
          <Card title="Redeem">
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
            <Button type="primary" size="large" block onClick={() => {
              tx(writeContracts.CitizenFixedBond.canClaim({

              })); 
            }}>Claim</Button>
          </Card>
        )
      default: return <Card title="DEFAULT">{route}</Card>
    }
  }

  
  return (
    <div className="shadow">

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