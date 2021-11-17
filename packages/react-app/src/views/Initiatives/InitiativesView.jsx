import { Col, Row } from "antd";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import BondBuilder from "../../components/BondBuilder";
import InitiativesChart from "../../components/InitiativesChart";
import InitiativesDetails from "../../components/InitiativesDetails";
import NFTBondVisualizer from "../../components/NFTBondVisualizer";
import { GlobalContext } from "../../context/GlobalState";

export default function InitiativesView({ sector }) {
  const { bondMaturity, bondAPY, sectorTextData, ETHBondAmount } = useContext(GlobalContext);
  const { initiative } = useParams();
  console.log(initiative);
  console.log(sectorTextData);
  const textData = sectorTextData[initiative];

  console.log(ETHBondAmount);

  const fv = function (rate, numPeriods, paymentAmount, presentVal) {
    return;
  };

  const date = new Date();
  const mintDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  const maturationDate = new Date(date.getTime() + 86400000 * bondMaturity);
  const maturationStr = `${maturationDate.getDate()}.${maturationDate.getMonth()}.${maturationDate.getFullYear()}`;

  return (
    <div>
      <Row gutter={[24, 24]} style={{ marginBottom: "24px" }}>
        <Col sm={24} md={24} lg={8}>
          <NFTBondVisualizer
            className="cdao_card"
            sector={textData.title}
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
            background={textData.nft.background}
          />
        </Col>
        <Col sm={24} md={24} lg={16}>
          <BondBuilder title={textData.title} season="Season 1" APY={bondAPY} />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col sm={24} md={24} lg={8}>
          <InitiativesDetails pageDescriptions={textData.projects} />
        </Col>

        <Col sm={24} md={24} lg={16}>
          <InitiativesChart ETHBondAmount={ETHBondAmount} bondMaturity={bondMaturity} />
        </Col>
      </Row>
    </div>
  );
}

const styles = {
  card: {
    padding: "0px",
    borderRadius: "15px",
    boxShadow:
      "inset -8px -8px 12px rgb(255 255 255 / 15%), 8px 8px 30px rgb(174 174 192 / 35%), inset -8px -8px 12px rgb(255 255 255 / 15%), inset 8px 8px 8px rgb(174 174 192 / 4%)",
  },
};
