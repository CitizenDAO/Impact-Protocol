import { Button, Col, Row, Card, List, Divider, Typography, Skeleton } from "antd";
import { Link } from "react-router-dom";
import React from 'react';

export default class Initiatives extends React.Component {

    state = {
      active: true,
      block: false,
      size: 'default',
      buttonShape: 'default',
      avatarShape: 'circle',
      initiatives: {
        health: [
          {
            text: 'quality life years added',
            value: '5,232'
          },
          {
            text: 'members',
            value: '3,734'
          },
          {
            text: 'active projects',
            value: '17'
          },
          {
            text: 'open proposals',
            value: '32'
          },
        ],
        housing: [
          {
            text: 'quality life years added',
            value: '5,232'
          },
          {
            text: 'members',
            value: '3,734'
          },
          {
            text: 'active projects',
            value: '17'
          },
          {
            text: 'open proposals',
            value: '32'
          },
        ],
        education: [
          {
            text: 'quality life years added',
            value: '5,232'
          },
          {
            text: 'members',
            value: '3,734'
          },
          {
            text: 'active projects',
            value: '17'
          },
          {
            text: 'open proposals',
            value: '32'
          },
        ],
        climate: [
          {
            text: 'quality life years added',
            value: '5,232'
          },
          {
            text: 'members',
            value: '3,734'
          },
          {
            text: 'active projects',
            value: '17'
          },
          {
            text: 'open proposals',
            value: '32'
          },
        ],
        finance: [
          {
            text: 'quality life years added',
            value: '5,232'
          },
          {
            text: 'members',
            value: '3,734'
          },
          {
            text: 'active projects',
            value: '17'
          },
          {
            text: 'open proposals',
            value: '32'
          },
        ],
        governance: [
          {
            text: 'quality life years added',
            value: '5,232'
          },
          {
            text: 'members',
            value: '3,734'
          },
          {
            text: 'active projects',
            value: '17'
          },
          {
            text: 'open proposals',
            value: '32'
          },
        ]
      }
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
      const { active, size, buttonShape, avatarShape, block, healthData, initiatives } = this.state;
      console.log(initiatives)
      return (
      <div>
        <Row gutter={[20, 40]} justify="center">
          <Col md={8}  xs={24}>
            <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Health</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ622</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={initiatives.health}
                renderItem={(item) => (
                  <List.Item>
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
          <Col md={8} xs={24}>
            <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Housing</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ888</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={initiatives.housing}
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
          <Col md={8} xs={24}>
            <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Education</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ498</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={initiatives.education}
                renderItem={ item => (
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

          <Col md={8} xs={24}>
          <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Climate</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ561</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={initiatives.climate}
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
          <Col md={8} xs={24}>
          <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Finance</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ289</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={initiatives.finance}
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
          <Col md={8} xs={24}>
          <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Governance</b></Title></Col>
                <Col span={12}><Title level={4} style={{textAlign: 'right'}}>Ξ321</Title></Col>
              </Row>
              <Divider/>
              <List
                style={{ textAlign: 'left'}}
                header={<div>Stats:</div>}
                bordered
                dataSource={initiatives.governance}
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