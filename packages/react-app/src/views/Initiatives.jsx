import { Button, Col, Row, Card, List, Divider, Typography } from "antd";
import { Link } from "react-router-dom";

export default function Initiative({

}) {

    const { Title } = Typography;

    const healthData = [
      {
        text: 'annual rewards',
        value: '10,200%'
      },
      {
        text: 'team members',
        value: '112'
      },
      {
        text: 'active projects',
        value: '2'
      },
      {
        text: 'requests for proposals',
        value: '5'
      },
    ]

    return (
    <div>
      <Row gutter={[16, 16]} justify="center">
        <Col flex="auto" >
          <Card style={{ width: 333 }}>
            <Row>
              <Col span={12}><Title level={4} style={{textAlign: 'left'}}><b>$Health</b></Title></Col>
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