import { useContext } from "react";
import { Row, Col } from "antd";
import NFTBondVisualizer from "../../components/NFTBondVisualizer";
import BondBuilder from "../../components/BondBuilder";
import { GlobalContext } from "../../context/GlobalState";

export default function InitiativesView({ sector }) {
  const { bondMaturity, bondAPY } = useContext(GlobalContext);
  const data = {
    climate: {
      sector: "Climate",
      projects: [],
    },
    education: {},
    housing: {},
  };

  const fv = function(rate, numPeriods, paymentAmount, presentVal) {
    return;
  }

  const date = new Date();
  const mintDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  const maturationDate = new Date(date.getTime() + (86400000 * bondMaturity));
  const maturationStr = `${maturationDate.getDate()}.${maturationDate.getMonth()}.${maturationDate.getFullYear()}`;

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col lg={8}>
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
        <Col lg={16}>
          <BondBuilder title={sector} season="Season 1" APY={bondAPY} />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>Project List here</Col>
        <Col lg={16}>Chart here</Col>
      </Row>
    </div>
  );
}
