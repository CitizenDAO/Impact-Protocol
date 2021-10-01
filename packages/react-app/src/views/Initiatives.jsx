import { Button, Col, Row, Card, List, Divider, Typography, Skeleton } from "antd";
import { Link } from "react-router-dom";
import React from 'react';

export default class Initiative extends React.Component {

    state = {
      active: true,
      block: false,
      size: 'default',
      buttonShape: 'default',
      avatarShape: 'circle',
      healthData: [
        {
          text: 'annual rewards',
          value: ''
        },
        {
          text: 'team members',
          value: ''
        },
        {
          text: 'active projects',
          value: ''
        },
        {
          text: 'requests for proposals',
          value: ''
        },
      ]
    };
  
    handleActiveChange = checked => {
      this.setState({ active: checked });
    };
  
    handleBlockChange = checked => {
      this.setState({ block: checked });
    };
  
    handleSizeChange = e => {
      this.setState({ size: e.target.value });
    };
  
    handleShapeChange = prop => e => {
      this.setState({ [prop]: e.target.value });
    };

    render() {
      const { Title } = Typography;
      const { active, size, buttonShape, avatarShape, block, healthData } = this.state;
      return (
      <div>
        <Row gutter={[16, 16]} justify="center">
          <Col flex="auto" >
            <Card style={{ width: 333 }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Health</b></Title></Col>
                <Col span={12}>
                  <Title level={4} style={{textAlign: 'right'}}>
                  {
                    <Skeleton.Button active={active} size={size} shape={buttonShape} />
                  }
                  </Title>
                </Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={healthData}
                renderItem={item => (
                    <List.Item>
                       <Skeleton.Button active={active} size='small' shape={buttonShape} />
                        <b>{item.value}</b> {item.text}
                    </List.Item>
                )}
              />
            <br/>
            <Link to="/initiatives/health">
              <Button>
                Learn More
              </Button>
            </Link>
            </Card>
          </Col>
          <Col flex="auto">
            <Card style={{ width: 333 }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Housing</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>
                  
                </Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={healthData}
                renderItem={item => (
                    <List.Item>
                        <b>{item.value}</b> {item.text}
                    </List.Item>
                )}
              />
              <br/>
              <Link to="/initiatives/housing">
                <Button>
                  Learn More
                </Button>
              </Link>
            </Card>
          </Col>
          <Col flex="auto">
            <Card style={{ width: 333 }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Education</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ0.1</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={healthData}
                renderItem={item => (
                    <List.Item>
                        <b>{item.value}</b> {item.text}
                    </List.Item>
                )}
              />
              <br/>
              <Link to="/initiatives/education">
                <Button>
                  Learn More
                </Button>
              </Link>
            </Card>
          </Col>

          <Col flex="auto">
          <Card style={{ width: 333 }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Climate</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ0.1</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={healthData}
                renderItem={item => (
                    <List.Item>
                        <b>{item.value}</b> {item.text}
                    </List.Item>
                )}
              />
              <br/>
              <Link to="/initiatives/climate">
                <Button>
                  Learn More
                </Button>
              </Link>
            </Card>
          </Col>
          <Col flex="auto">
          <Card style={{ width: 333 }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Finance</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ0.1</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={healthData}
                renderItem={item => (
                    <List.Item>
                        <b>{item.value}</b> {item.text}
                    </List.Item>
                )}
              />
              <br/>
              <Link to="/initiatives/finance">
                <Button>
                  Learn More
                </Button>
              </Link>
            </Card>
          </Col>
          <Col flex="auto">
          <Card style={{ width: 333 }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Governance</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ0.1</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={healthData}
                renderItem={item => (
                    <List.Item>
                        <b>{item.value}</b> {item.text}
                    </List.Item>
                )}
              />
              <br/>
              <Link to="/initiatives/governance">
                <Button>
                  Learn More
                </Button>
              </Link>
            </Card>
          </Col>
      </Row>
    </div>
    )
  }
}