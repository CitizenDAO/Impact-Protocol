import { Col, Row, Typography } from 'antd';
import { useContractReader } from 'eth-hooks';
import { useEffect, useState } from 'react';

export default function YourBondView({ sector, address, selectedProvider, readContracts }) {
  const { Title } = Typography;

  console.log(address);
  const balance = useContractReader(readContracts, 'CitizenNFTBond', 'balanceOf', [address]);
  const yourBalance = balance && balance.toNumber && balance.toNumber();
  const [yourBonds, setYourBonds] = useState();

  useEffect(() => {
    const updateYourBonds = async () => {
      const collectibleUpdate = [];
      for (let tokenIndex = 0; tokenIndex < balance; tokenIndex++) {
        try {
          console.log('GEtting token index', tokenIndex);
          const tokenId = await readContracts.CitizenNFTBond.tokenOfOwnerByIndex(address, tokenIndex);
          console.log('tokenId', tokenId);
          const tokenURI = await readContracts.CitizenNFTBond.tokenURI(tokenId);
          console.log('tokenURI', tokenURI);

          const ipfsHash = tokenURI.replace('https://ipfs.io/ipfs/', '');
          console.log('ipfsHash', ipfsHash);

          const jsonManifestBuffer = await getFromIPFS(ipfsHash);

          try {
            const jsonManifest = JSON.parse(jsonManifestBuffer.toString());
            console.log('jsonManifest', jsonManifest);
            collectibleUpdate.push({ id: tokenId, uri: tokenURI, owner: address, ...jsonManifest });
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
