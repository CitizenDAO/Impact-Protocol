import { StepForwardOutlined, SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import {
  Button,
  Image,
  Skeleton,
  Typography,
  Card,
  DatePicker,
  Divider,
  Input,
  List,
  Progress,
  Slider,
  Spin,
  Switch,
  Row,
  Col,
} from "antd";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Address, Balance } from "../components";
import Initiatives from "./Initiatives";
import Modal from "react-modal";
import { useEffect } from "react";

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
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  function toggleModal() {
    setShowModal(!showModal);
  }

  function changeModalSrc(src) {
    setModalSrc(src);
  }

  const { Title } = Typography;

  return (
    <div>
      <div className="banner-background">
        <Image src="Website-Thumbnail.png" preview={false} />
      </div>
      <Title style={{ textAlign: "left" }} level={2}>
        Dashboard
      </Title>
      <Row style={{ marginBottom: "40px" }}>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: "auto" }}>
            <p>Total Eth</p>
            <Skeleton.Button active={true} size="large" shape="square" />
          </Card>
        </Col>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: "auto" }}>
            <p>CDAO Price</p>
            <Skeleton.Button active={true} size="large" shape="square" />
          </Card>
        </Col>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: "auto" }}>
            <p>Market Cap</p>
            <Skeleton.Button active={true} size="large" shape="square" />
          </Card>
        </Col>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: "auto" }}>
            <p>Circulating Supply</p>
            <Skeleton.Button active={true} size="large" shape="square" />
          </Card>
        </Col>
      </Row>

      <Row style={{ marginBottom: "40px" }}>
        <Col span={24}>
          <Card>
            <Title level={4} style={{ textAlign: "left" }}>
              <b>Become a Citizen</b>
            </Title>
            <p style={{ textAlign: "left" }}>Gain access to the CitizenDAO community</p>
            <Row gutter={[16, 16]}>
              <Col lg={12} md={24}>
                <Card
                  title="Founder"
                  hoverable
                  style={{ width: "auto" }}
                  cover={
                    <video
                      controls
                      loop
                      alt="CitizenDAO Founder Citizenship NFT"
                      src="https://bafybeidzgyqfbvl4k7xw2jcu7bwystio3h7ebjvoy3qhixkwz32lw3t2ti.ipfs.dweb.link/"
                    />
                  }
                >
                  <Button size="large" onClick={toggleModal}>Claim</Button>
                </Card>
              </Col>
              <Col lg={12} md={24}>
                <Link to="/citizenship/pioneer" replace>
                  <Card
                    title="Pioneer"
                    hoverable
                    style={{ width: "auto" }}
                    cover={
                      <video
                        controls
                        loop
                        alt="CitizenDAO Pioneer Citizenship NFT"
                        src="https://bafybeidzgyqfbvl4k7xw2jcu7bwystio3h7ebjvoy3qhixkwz32lw3t2ti.ipfs.dweb.link/" 
                      />
                    }
                  >
                    <Button size="large" onClick={ 
                      () => { 
                        // toggleModal(); 
                        // changeModalSrc("https://bafybeidzgyqfbvl4k7xw2jcu7bwystio3h7ebjvoy3qhixkwz32lw3t2ti.ipfs.dweb.link/"); 
                      }
                    } >
                        Join
                    </Button>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={showModal} onRequestClose={toggleModal} style={{}}>
        <Button onClick={toggleModal}>close</Button>
        <Row justify="center">
          <Col>
            <Card title="Pioneer Citizenship NFT" cover={<video controls loop alt="example" src={modalSrc} />}>
              <Title level="4">Pioneer Series Citizenship NFT</Title>
              <p>Price: </p>
              <p>Supply: </p>
              <p>The Pioneer series Citizenship NFT grants access to the CitizenDAO discord server.</p>
              <Button size="large" style={{ width: "100%" }}>
                Mint
              </Button>
            </Card>
          </Col>
        </Row>
      </Modal>

      <Initiatives />
    </div>
  );
}
