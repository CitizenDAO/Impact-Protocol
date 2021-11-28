import { Card, Col, Row, Typography } from 'antd';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BondBuilder from '../../components/BondBuilder';
import InitiativesChart from '../../components/InitiativesChart';
import NFTBondVisualizer from '../../components/NFTBondVisualizer';
import { GlobalContext } from '../../context/GlobalState';

export default function InitiativesView({ sector }) {
  const { bondMaturity, bondAPY, sectorTextData, ETHBondAmount, initCDAO, CDAOPriceETH } = useContext(GlobalContext);
  const { initiative } = useParams();
  const textData = sectorTextData[initiative];

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
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col sm={24} md={24} lg={8}>
          <NFTBondVisualizer
            className="cdao_card"
            sector={textData.nft.title}
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
            background={textData.nft.background}
          />
        </Col>
        <Col sm={24} md={24} lg={16}>
          <BondBuilder title={textData.title} season="Season 1" APY={bondAPY} />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col sm={24} md={24} lg={8}>
          {/* <InitiativesDetails pageDescriptions={textData.projects} /> */}
          <a href={textData.description.forumLink} style={{ display: 'block' }} target="_blank">
            <Card style={{ width: 'auto' }} className="hover">
              <Row className="mb-1">
                <Col span={24}>
                  <img class="br-15" style={{ width: '100%' }} src={textData.description.img} />
                </Col>
              </Row>
              <Row className="mb-1">
                <Col span={24}>
                  <Title level={3} style={{ textAlign: 'left' }}>
                    {}
                  </Title>
                  <Title level={5}>{}</Title>
                </Col>
                <Col>
                  <Text className="text-size-md">{textData.description.text}</Text>
                  <br />
                  <Text className="text-size-md">
                    <a href={textData.description.forumLink} target="_blank">
                      Learn more on our forum
                    </a>
                  </Text>
                </Col>
              </Row>
            </Card>
          </a>
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

const styles = {
  card: {
    padding: '0px',
    borderRadius: '15px',
    boxShadow:
      'inset -8px -8px 12px rgb(255 255 255 / 15%), 8px 8px 30px rgb(174 174 192 / 35%), inset -8px -8px 12px rgb(255 255 255 / 15%), inset 8px 8px 8px rgb(174 174 192 / 4%)',
  },
};
