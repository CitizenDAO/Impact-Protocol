import { Card, Col, Row, Typography } from 'antd';
import { useContractReader } from 'eth-hooks';
import { useEffect, useState } from 'react';

export default function YourBondView({ sector, address, selectedProvider, readContracts }) {
  const { Title } = Typography;

  console.log(address);
  const balance = useContractReader(readContracts, 'CitizenNFTBond', 'balanceOf', [address]);
  const yourBalance = balance && balance.toNumber && balance.toNumber();
  const [yourBonds, setYourBonds] = useState([]);

  useEffect(() => {
    const updateYourBonds = async () => {
      const collectibleUpdate = [];
      for (let tokenIndex = 0; tokenIndex < balance; tokenIndex++) {
        try {
          const tokenId = await readContracts.CitizenNFTBond.tokenOfOwnerByIndex(address, tokenIndex);
          const tokenURI = await readContracts.CitizenNFTBond.tokenURI(tokenId);

          try {
            collectibleUpdate.push({ id: tokenId, uri: tokenURI, owner: address });
          } catch (e) {
            console.log(e);
          }
        } catch (e) {
          console.log(e);
        }
      }
      setYourBonds(collectibleUpdate);
    };
    updateYourBonds();
  }, [address, yourBalance]);

  const isEmpty = yourBonds.length === 0;

  return (
    <div>
      {(() => {
        if (yourBonds.length > 0) {
          return (
            <Row>
              {yourBonds.map(bond => {
                return (
                  <Card>
                    <Col>BOND: {JSON.stringify(bond)}</Col>
                  </Card>
                );
              })}
            </Row>
          );
        } else {
          return (
            <Row justify="center" align="middle" style={{ height: '50%' }}>
              <Col>
                <Typography>
                  <Title level={3}>Ooops... looks like you don't have any bonds...</Title>
                </Typography>
              </Col>
            </Row>
          );
        }
      })()}
    </div>
  );
}
