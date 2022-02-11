import { Card, Col, Row, Typography } from 'antd';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BondBuilder from '../../components/BondBuilder';
import InitiativesChart from '../../components/InitiativesChart';
import NFTBondVisualizer from '../../components/NFTBondVisualizer';
import { GlobalContext } from '../../context/GlobalState';

export default function InitiativesView({ sector }) {
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
          <BondBuilder title={initiativeData.title} season="Season 1" APY={bondAPY} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card style={{ width: 'auto' }} className="hover">
            <Row className="mb-1">
              <Col span={24}>
                <img class="br-15" style={{ width: '100%' }} src={''} />
              </Col>
            </Row>
            <Row className="mb-1">
              <Col span={24}>
                <Title level={3} style={{ textAlign: 'left' }}>
                  Sustainable Development Goals Targeted
                </Title>
              </Col>
              <Col>
                <Row>
                  {initiativeData.targetedSDGs.map(item => {
                    return <Col style={{ display: 'flex' }}>SDG {item}</Col>;
                  })}
                </Row>
              </Col>
            </Row>
          </Card>
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
    </div>
  );
}
