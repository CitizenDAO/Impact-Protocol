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
      <Row gutter={[16, 16]}>
        <Col span={8} >
          <Card style={{ width: 300 }}>
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
        <Col span={8} />
        <Col span={8} />

        <Col span={8} />
        <Col span={8} />
        <Col span={8} />
    </Row>
  </div>
  )
}