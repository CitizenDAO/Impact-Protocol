import { SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import { Button, Image, Skeleton, Typography, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch, Row, Col } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";
import Initiatives from './Initiatives';

export default function Dashboard({
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
  const [newPurpose, setNewPurpose] = useState("loading...");

  const { Title } = Typography;

  return (
    <div>
      <div className="banner-background">
        <Image src="Website-Thumbnail.png" preview={false} />
      </div>
      <Title style={{textAlign: 'left'}} level={2}>Dashboard</Title>
      <Row style={{marginBottom: '40px'}}>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: 'auto' }}>
            <p>Total Eth</p>
            <Skeleton.Button 
              active={true}
              size="large"
              shape="square"
            />
          </Card>
        </Col>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: 'auto' }}>
            <p>CDAO Price</p>
            <Skeleton.Button 
              active={true}
              size="large"
              shape="square"
            />
          </Card>
        </Col>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: 'auto' }}>
            <p>Market Cap</p>
            <Skeleton.Button 
              active={true}
              size="large"
              shape="square"
            />
          </Card>
        </Col>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: 'auto' }}>
            <p>Circulating Supply</p>
            <Skeleton.Button 
              active={true}
              size="large"
              shape="square"
            />
          </Card>
        </Col>
      </Row>
      <Initiatives />
    </div>
  );
}
