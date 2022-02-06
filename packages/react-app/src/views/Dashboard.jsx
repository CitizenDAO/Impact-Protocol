import { Button, Card, Col, Row, Typography } from 'antd';
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
      <Row style={{ marginBottom: '40px' }}>
        <Col span={24}>
          <Card style={styles.card}>
            <Title style={{ textAlign: 'left' }}>
              <b>Become a Citizen 👩‍🚀</b>
            </Title>
            <p className="text-size-md" style={{ textAlign: 'left' }}>
              Gain access to the CitizenDAO community
            </p>
            <Row gutter={[16, 16]}>
              <Col>
                <Link to="/citizenship/pioneer" replace>
                  <Card
                    className="card-size-md"
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
              <Col>
                <Link to="/citizenship/pioneer" replace>
                  <Card
                    className="card-size-md"
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

      <Row className="mb-1">
        <Col>
          <Card>
            <Title>Invest in Social Impact 🚀</Title>
            <p className="text-size-md">
              Particiapte directly in selecting and funding projects working on the 17 Sustainable Development Goals.
              Explore and mint bonds from the goals that interest you most below.
            </p>
            <p className="text-size-md">
              These Impact Bonds come with some special perks that will allow you to influence which projects CitizenDAO
              will allocates funds.
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="mb-2">
        <Initiatives />
      </Row>

      <Row>
        <Col lg={24}>
          <Card>
            <Title>Join the Community 😎</Title>
            <p className="text-size-md">
              Reach out, connect, participate, collaborate, share memes, learn, and engage with the CitizenDAO
              community.
            </p>
            <a href="https://discord.gg/SVKqEmrnM4">
              <Button size="large" type="primary">
                Join our Discord
              </Button>
            </a>
          </Card>
        </Col>
      </Row>
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
