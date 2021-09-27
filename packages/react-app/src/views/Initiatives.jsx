import { Button, Col, Row, Card, List, Space } from "antd";

export default function Initiative({

}) {

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
              <Card title="$Health" style={{ width: 300 }}>
                  <List
                    style={{ textAlign: 'left'}}
                    header={<div>stats</div>}
                    bordered
                    dataSource={healthData}
                    renderItem={item => (
                        <List.Item>
                            <b>{item.value}</b> {item.text}
                        </List.Item>
                    )}
                  />
                <br/>
                <Button>Learn More</Button>
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