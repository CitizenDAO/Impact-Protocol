import { Button, Card, Col, Divider, List, Row, Space, Typography } from 'antd';
import Text from 'antd/lib/typography/Text';
import { capitalize } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

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
          value: '5,232',
        },
        {
          text: 'members',
          value: '3,734',
        },
        {
          text: 'active projects',
          value: '17',
        },
        {
          text: 'open proposals',
          value: '32',
        },
      ],
      housing: [
        {
          text: 'quality life years added',
          value: '5,232',
        },
        {
          text: 'members',
          value: '3,734',
        },
        {
          text: 'active projects',
          value: '17',
        },
        {
          text: 'open proposals',
          value: '32',
        },
      ],
      education: [
        {
          text: 'quality life years added',
          value: '5,232',
        },
        {
          text: 'members',
          value: '3,734',
        },
        {
          text: 'active projects',
          value: '17',
        },
        {
          text: 'open proposals',
          value: '32',
        },
      ],
      climate: [
        {
          text: 'quality life years added',
          value: '5,232',
        },
        {
          text: 'members',
          value: '3,734',
        },
        {
          text: 'active projects',
          value: '17',
        },
        {
          text: 'open proposals',
          value: '32',
        },
      ],
      finance: [
        {
          text: 'quality life years added',
          value: '5,232',
        },
        {
          text: 'members',
          value: '3,734',
        },
        {
          text: 'active projects',
          value: '17',
        },
        {
          text: 'open proposals',
          value: '32',
        },
      ],
      governance: [
        {
          text: 'quality life years added',
          value: '5,232',
        },
        {
          text: 'members',
          value: '3,734',
        },
        {
          text: 'active projects',
          value: '17',
        },
        {
          text: 'open proposals',
          value: '32',
        },
      ],
    },
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
    console.log(initiatives);
    return (
      <div>
        <Row gutter={[20, 40]} justify="center">
          <Col sm={24}>
            <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ textAlign: 'left' }}>
                    <Space>
                      <Text className="mr-2">
                        <b>$Health</b>
                      </Text>
                      (Ξ622)
                    </Space>
                  </Title>
                </Col>
                <Col span={4}>
                  <Link to="/initiatives/health">
                    <Button>Learn More</Button>
                  </Link>
                </Col>
              </Row>
              <Divider />
              <List
                style={{ textAlign: 'left' }}
                grid={{ gutter: 24, sm: 2, md: 4 }}
                dataSource={initiatives.health}
                renderItem={item => (
                  <List.Item>
                    <Title level={5}>
                      <b>{item.value}</b>
                    </Title>
                    {capitalize(item.text)}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col sm={24}>
            <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ textAlign: 'left' }}>
                    <Space>
                      <Text className="mr-2">
                        <b>$Housing</b>
                      </Text>
                      (Ξ888)
                    </Space>
                  </Title>
                </Col>
                <Col span={4}>
                  <Link to="/initiatives/housing">
                    <Button>Learn More</Button>
                  </Link>
                </Col>
              </Row>
              <Divider />
              <List
                style={{ textAlign: 'left' }}
                grid={{ gutter: 24, sm: 2, md: 4 }}
                dataSource={initiatives.housing}
                renderItem={item => (
                  <List.Item>
                    <Title level={5}>
                      <b>{item.value}</b>
                    </Title>
                    {capitalize(item.text)}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col sm={24}>
            <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ textAlign: 'left' }}>
                    <Space>
                      <Text className="mr-2">
                        <b>$Education</b>
                      </Text>
                      (Ξ498)
                    </Space>
                  </Title>
                </Col>
                <Col span={4}>
                  <Link to="/initiatives/education">
                    <Button>Learn More</Button>
                  </Link>
                </Col>
              </Row>
              <Divider />
              <List
                style={{ textAlign: 'left' }}
                grid={{ gutter: 24, sm: 2, md: 4 }}
                dataSource={initiatives.education}
                renderItem={item => (
                  <List.Item>
                    <Title level={5}>
                      <b>{item.value}</b>
                    </Title>
                    {capitalize(item.text)}
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col sm={24}>
            <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ textAlign: 'left' }}>
                    <Space>
                      <Text className="mr-2">
                        <b>$Climate</b>
                      </Text>
                      (Ξ561)
                    </Space>
                  </Title>
                </Col>
                <Col span={4}>
                  <Link to="/initiatives/climate">
                    <Button>Learn More</Button>
                  </Link>
                </Col>
              </Row>
              <Divider />
              <List
                style={{ textAlign: 'left' }}
                grid={{ gutter: 24, sm: 2, md: 4 }}
                dataSource={initiatives.climate}
                renderItem={item => (
                  <List.Item>
                    <Title level={5}>
                      <b>{item.value}</b>
                    </Title>
                    {capitalize(item.text)}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col sm={24}>
            <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ textAlign: 'left' }}>
                    <Space>
                      <Text className="mr-2">
                        <b>$Finance</b>
                      </Text>
                      (Ξ289)
                    </Space>
                  </Title>
                </Col>
                <Col span={4}>
                  <Link to="/initiatives/finance">
                    <Button>Learn More</Button>
                  </Link>
                </Col>
              </Row>
              <Divider />
              <List
                style={{ textAlign: 'left' }}
                grid={{ gutter: 24, sm: 2, md: 4 }}
                dataSource={initiatives.finance}
                renderItem={item => (
                  <List.Item>
                    <Title level={5}>
                      <b>{item.value}</b>
                    </Title>
                    {capitalize(item.text)}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col sm={24}>
            <Card style={{ width: 'auto' }}>
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ textAlign: 'left' }}>
                    <Space>
                      <Text className="mr-2">
                        <b>$Governance</b>
                      </Text>
                      (Ξ321)
                    </Space>
                  </Title>
                </Col>
                <Col span={4}>
                  <Link to="/initiatives/governance">Learn More</Link>
                </Col>
              </Row>
              <Divider />
              <List
                style={{ textAlign: 'left' }}
                grid={{ gutter: 24, sm: 2, md: 4 }}
                dataSource={initiatives.governance}
                renderItem={item => (
                  <List.Item>
                    <Title level={5}>
                      <b>{item.value}</b>
                    </Title>
                    {capitalize(item.text)}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
