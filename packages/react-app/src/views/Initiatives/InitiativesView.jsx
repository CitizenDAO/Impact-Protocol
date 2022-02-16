import { Card, Col, Collapse, Row, Typography } from 'antd';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BondBuilder from '../../components/BondBuilder';
import InitiativesChart from '../../components/InitiativesChart';
import NFTBondVisualizer from '../../components/NFTBondVisualizer';
import { GlobalContext } from '../../context/GlobalState';

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
  border-radius: 15px;
  background-color: white;
  box-shadow: rgb(255 255 255 / 15%) -8px -8px 12px inset, rgb(174 174 192 / 35%) 8px 8px 30px,
    rgb(255 255 255 / 15%) -8px -8px 12px inset, rgb(174 174 192 / 4%) 8px 8px 8px inse;
`;

export default function InitiativesView({ sector, selectedProvider, writeContracts }) {
  const { bondMaturity, bondAPY, initiatives, ETHBondAmount, initCDAO } = useContext(GlobalContext);
  const { initiative } = useParams();

  const initiativeData = initiatives[initiative];

  const fv = (i, r, t, d) => {
    // future value
    // i = Initial investment
    // r = Interest rate
    // t = time ( years )
    // d = days
    return i * (1 + r) ** (d / t);
  };

  const bondDailyYield = (i, r, d) => {
    // i = initial investment
    // r = APY
    // d = number of days
    return i * (1 + r / 100 / 365) ** d;
  };

  const bondYield = (i, r, p) => {
    // used to get total yield after p days
    // i = initial investment
    // r = APY
    // p = days
    return i * (1 + r / 100 / 365) ** p;
  };

  const generateChartData = function ({ bondAPY, ETHBondAmount, bondMaturity }) {
    let d = [];
    for (let i = 0; i <= bondMaturity; i += 5) {
      d.push({
        days: i,
        futureValue: bondYield(initCDAO, bondAPY, i),
      });
    }
    return d;
  };

  const chartData = generateChartData({ bondAPY, ETHBondAmount, bondMaturity });
  const finalYield = chartData[chartData.length - 1].futureValue;

  const date = new Date();
  const mintDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  const maturationDate = new Date(date.getTime() + 86400000 * bondMaturity);
  const maturationStr = `${maturationDate.getDate()}.${maturationDate.getMonth()}.${maturationDate.getFullYear()}`;

  const { Text, Title } = Typography;
  return (
    <div>
      <Row justify="space-between" align="top" gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <NFTBondVisualizer
            className="cdao_card"
            sector={initiativeData.title}
            bondMaturity={bondMaturity}
            totalCDAO={finalYield}
            APY={bondAPY}
            tokenNum="1"
            mintDate={mintDate}
            maturationDate={maturationStr}
            topLeft="Citizen DAO Season 1"
            topRight="Social Impact Bond"
            bottomLeft="CitizenDAO.com"
            bottomRight="@CitizenDAO"
            background={initiativeData.nft.background}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          <BondBuilder
            title={initiativeData.title}
            season="Season 1"
            APY={bondAPY}
            selectedProvider={selectedProvider}
            writeContracts={writeContracts}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <StyledCollapse defaultActiveKey={['1', '2', '3']} bordered={false}>
            <Panel header={`About ${initiativeData.title} bonds`} key="1">
              <p>{initiativeData.description}</p>
            </Panel>
            <Panel header="About Citizen DAO" key="2">
              <p>
                Think of Citizen DAO as a fork of the United Nations. We’re building a new type of public benefit
                organization focused on health, housing, education, & climate.
              </p>
            </Panel>
            <Panel header="Smart Contract Stats" key="3">
              <Row justify="space-between">
                <Col>
                  <p>Contract Address</p>
                </Col>
                <Col>
                  <p>0x4434gg34d....</p>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col>
                  <p>Token Standard</p>
                </Col>
                <Col>
                  <p>ERC-721</p>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col>
                  <p>Blockchain</p>
                </Col>
                <Col>
                  <p>Ethereum</p>
                </Col>
              </Row>
            </Panel>
          </StyledCollapse>
        </Col>

        <Col sm={24} md={24} lg={16}>
          <InitiativesChart
            chartData={chartData}
            ETHBondAmount={ETHBondAmount}
            bondMaturity={bondMaturity}
            CDAOYield={finalYield}
            initCDAO={initCDAO}
          />
        </Col>
      </Row>
      <Row justify="space-between" align="top" gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card>
            <Row>
              <Col span={24}>
                <img className="br-15" style={{ width: '100%' }} src={''} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Title level={4} style={{ textAlign: 'left' }}>
                  Sustainable Development Goals Impacted
                </Title>
              </Col>
              <Col>
                <Row gutter={[8, 8]}>
                  {initiativeData.targetedSDGs.map(item => {
                    return (
                      <Col style={{ display: 'flex' }} key={item}>
                        <img width="80px" src={`sdg-icons/E-WEB-Goal-${item}.png`} />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm={24} md={24} lg={16}>
          <Card>
            <Title level={4} style={{ textAlign: 'left' }}>
              Projects funded by this bond
            </Title>
            {initiativeData.projects.map(project => {
              return (
                <Row justify="space-between" key={project.title}>
                  <Col sm={24} md={8} lg={8}>
                    {project.title}
                  </Col>
                  <Col sm={24} md={16} lg={16}>
                    {project.content}
                  </Col>
                </Row>
              );
            })}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
