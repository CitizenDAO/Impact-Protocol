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

export default function Bond() {
  const { Title, Text } = Typography;

  const columns = [
    {
      dataIndex: 'name',
    },
    {
      dataIndex: 'borrow',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      borrow: 10,
    },
    {
      key: '2',
      name: 'Jim Green',
      borrow: 100,
    },
    {
      key: '3',
      name: 'Joe Black',
      borrow: 10,
    },
    {
      key: '4',
      name: 'Jim Red',
      borrow: 75,
    },
  ];
  
  const fixedColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      fixed: true,
      width: 100,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
  ];
  
  const fixedData = [];
  for (let i = 0; i < 20; i += 1) {
    fixedData.push({
      key: i,
      name: ['Light', 'Bamboo', 'Little'][i % 3],
      description: 'Everything that has a beginning, has an end.',
    });
  }

  const gridStyle = {
    width: '100%',
    textAlign: 'left',
  };
  

  return (
    <div>
      <Card title="wETH" bordered={false}>
        <Row>
          <Col flex={3}>
            <Title level={4}>Bond Price</Title>
            <Title level={5}>$3</Title>
          </Col>
          <Col flex={3}>
            <Title level={4}>Market Price</Title>
            <Title level={5}>$3.33</Title>
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
            <div>0.0 wETH</div>
          </List.Item>
          <List.Item key={1}>
            <List.Item.Meta
              style={{textAlign: 'left'}}
              title={<p>You Will Get</p>}
            />
            <div>0.0 wETH</div>
          </List.Item>
          <List.Item key={1}>
            <List.Item.Meta
              style={{textAlign: 'left'}}
              title={<p>ROI</p>}
            />
            <div>0.0 wETH</div>
          </List.Item>
          <List.Item key={1}>
            <List.Item.Meta
              style={{textAlign: 'left'}}
              title={<p>Vesting Term</p>}
            />
            <div>0.0 wETH</div>
          </List.Item>
        </List>
      </Card>
    </div>
  )
}