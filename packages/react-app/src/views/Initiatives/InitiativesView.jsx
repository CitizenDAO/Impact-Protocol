import { useContext } from "react";
import { Row, Col } from "antd";
import NFTBondVisualizer from "../../components/NFTBondVisualizer";
import BondBuilder from "../../components/BondBuilder";
import { useLocalStorage } from "../../hooks";
import { GlobalContext } from "../../context/GlobalState";
import { useLocation } from "react-router-dom";

export default function InitiativesView({}) {
  const { bondMaturity } = useContext(GlobalContext);
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col lg={8}>
          <NFTBondVisualizer sector="Climate" bondMaturity={bondMaturity} />
        </Col>
        <Col lg={16}>
          <BondBuilder title="Climate" season="Season 1" />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>Project List here</Col>
        <Col lg={16}>Chart here</Col>
      </Row>
    </div>
  );
}
