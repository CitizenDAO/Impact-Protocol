import { SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import { Button, Skeleton, Typography, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch, Row, Col } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";

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
     <h1>Dashboard</h1>
      <Row>
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
    </div>
  );
}
