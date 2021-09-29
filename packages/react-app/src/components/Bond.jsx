import React from 'react';
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
  List
} from 'antd';
import Balance from './Balance';
import { useBalance } from "eth-hooks";
const { utils } = require("ethers");
import useLocalStorage from '../hooks/LocalStorage';

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

  const [name, setName] = useLocalStorage("name", "Bob");

  
  return (
    <div>
      <Card title="ETH" bordered={false}>
        <Row>
          <Col flex={3}>
            <Title level={4}>Bond Price</Title>
            <Title level={5}>$X</Title>
          </Col>
          <Col flex={3}>
            <Title level={4}>Market Price</Title>
            <Title level={5}>$XX</Title>
          </Col>
        </Row>
        <Divider orientation="left">Bond Purchase</Divider>
        <Row>
          <Col flex={1}>
            <Space direction="vertical" style={{width: '100%'}}>
            <Row>
              <Col flex={5}><InputNumber type="number" style={{width: '100%'}} addonBefore="+" addonAfter="$" size="large"/></Col>
              <Col flex={2}><Button size="large" style={{width: '100%'}} >Max</Button></Col>
            </Row>
            <Button type="primary" size="large" block>
              Approve
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
            <div>{yourLocalBalance ? utils.formatEther(yourLocalBalance) : "..."}</div>
          </List.Item>
          <List.Item key={2}>
            <List.Item.Meta
              style={{textAlign: 'left'}}
              title={<p>You Will Get</p>}
            />
            <div>X.X CDAO</div>
          </List.Item>
          <List.Item key={3}>
            <List.Item.Meta
              style={{textAlign: 'left'}}
              title={<p>ROI</p>}
            />
            <div>X.XX %</div>
          </List.Item>
          <List.Item key={4}>
            <List.Item.Meta
              style={{textAlign: 'left'}}
              title={<p>Vesting Term</p>}
            />
            <div>X Days</div>
          </List.Item>
        </List>
      </Card>
    </div>
  )
}