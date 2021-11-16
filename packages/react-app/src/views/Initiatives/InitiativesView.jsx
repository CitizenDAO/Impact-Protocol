import { Col, Row } from 'antd';
import { useContext } from 'react';
import BondBuilder from '../../components/BondBuilder';
import InitiativesChart from '../../components/InitiativesChart';
import InitiativesDetails from '../../components/InitiativesDetails';
import NFTBondVisualizer from '../../components/NFTBondVisualizer';
import { GlobalContext } from '../../context/GlobalState';

export default function InitiativesView({ sector }) {
  const { bondMaturity, bondAPY } = useContext(GlobalContext);
  const data = {
    climate: {
      sector: 'Climate',
      projects: [],
    },
    education: {},
    housing: {},
  };

  const fv = function (rate, numPeriods, paymentAmount, presentVal) {
    return;
  };

  const date = new Date();
  const mintDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  const maturationDate = new Date(date.getTime() + 86400000 * bondMaturity);
  const maturationStr = `${maturationDate.getDate()}.${maturationDate.getMonth()}.${maturationDate.getFullYear()}`;

  return (
    <div>
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col sm={24} md={4} lg={6}>
          <NFTBondVisualizer
            sector={sector}
            bondMaturity={bondMaturity}
            totalCDAO="100,000,000"
            APY={bondAPY}
            tokenNum="1"
            mintDate={mintDate}
            maturationDate={maturationStr}
            topLeft="Citizen DAO Season 1"
            topRight="Social Impact Bond"
            bottomLeft="CitizenDAO.com"
            bottomRight="@CitizenDAO"
          />
        </Col>
        <Col sm={24} md={20} lg={17}>
          <BondBuilder title={sector} season="Season 1" APY={bondAPY} />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col sm={24} md={4} lg={6}>
          <InitiativesDetails />
        </Col>

        <Col sm={24} md={20} lg={17}>
          <InitiativesChart />
        </Col>
      </Row>
    </div>
  );
}
