import { Button, Card, Col, Row, Skeleton, Typography } from 'antd';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
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
  const [newPurpose, setNewPurpose] = useState('loading...');
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState('');

  function toggleModal() {
    setShowModal(!showModal);
  }

  function changeModalSrc(src) {
    setModalSrc(src);
  }

  const { Title } = Typography;

  return (
    <div>
      <Row style={{ marginBottom: '40px' }} gutter={[24, 24]}>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: 'auto' }}>
            <p>Total Eth</p>
            <Skeleton.Button active={true} size="large" shape="square" />
          </Card>
        </Col>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: 'auto' }}>
            <p>CDAO Price</p>
            <Skeleton.Button active={true} size="large" shape="square" />
          </Card>
        </Col>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: 'auto' }}>
            <p>Market Cap</p>
            <Skeleton.Button active={true} size="large" shape="square" />
          </Card>
        </Col>
        <Col span={6} md={12} xs={24}>
          <Card style={{ width: 'auto' }}>
            <p>Circulating Supply</p>
            <Skeleton.Button active={true} size="large" shape="square" />
          </Card>
        </Col>
      </Row>

      <Row style={{ marginBottom: '40px' }}>
        <Col span={24}>
          <Card style={styles.card}>
            <Title level={4} style={{ textAlign: 'left' }}>
              <b>Become a Citizen</b>
            </Title>
            <p style={{ textAlign: 'left' }}>Gain access to the CitizenDAO community</p>
            <Row gutter={[16, 16]}>
              <Col lg={12} md={24}>
                <Link to="/citizenship/pioneer" replace>
                  <Card
                    title="Founder"
                    hoverable
                    style={{ width: 'auto' }}
                    cover={
                      <video
                        controls
                        loop
                        alt="CitizenDAO Founder Citizenship NFT"
                        src="https://bafybeidzgyqfbvl4k7xw2jcu7bwystio3h7ebjvoy3qhixkwz32lw3t2ti.ipfs.dweb.link/"
                      />
                    }
                  >
                    <Button size="large" block>
                      Claim
                    </Button>
                  </Card>
                </Link>
              </Col>
              <Col lg={12} md={24}>
                <Link to="/citizenship/pioneer" replace>
                  <Card
                    title="Pioneer"
                    hoverable
                    style={{ width: 'auto' }}
                    cover={
                      <video
                        controls
                        loop
                        alt="CitizenDAO Pioneer Citizenship NFT"
                        src="https://bafybeidzgyqfbvl4k7xw2jcu7bwystio3h7ebjvoy3qhixkwz32lw3t2ti.ipfs.dweb.link/"
                      />
                    }
                  >
                    <Button
                      size="large"
                      block
                      onClick={() => {
                        // toggleModal();
                        // changeModalSrc("https://bafybeidzgyqfbvl4k7xw2jcu7bwystio3h7ebjvoy3qhixkwz32lw3t2ti.ipfs.dweb.link/");
                      }}
                    >
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
              <Button size="large" style={{ width: '100%' }}>
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

const styles = {
  card: {
    padding: '10px',
    borderRadius: '15px',
    boxShadow:
      'inset -8px -8px 12px rgb(255 255 255 / 15%), 8px 8px 30px rgb(174 174 192 / 35%), inset -8px -8px 12px rgb(255 255 255 / 15%), inset 8px 8px 8px rgb(174 174 192 / 4%)',
  },
};
