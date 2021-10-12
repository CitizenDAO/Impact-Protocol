import Bond from '../../components/Bond';
import { Layout, Typography } from 'antd'

export default function Health({
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

  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Content>
      <Title level={2} style={{textAlign: 'left'}}>$Health</Title>
      <Bond
        className="shadow"
        address={address}
        mainnetProvider={mainnetProvider}
        localProvider={localProvider}
        yourLocalBalance={yourLocalBalance}
        price={price}
        tx={tx}
        writeContracts={writeContracts}
        readContracts={readContracts}
        purpose={purpose}
        setPurposeEvents={setPurposeEvents}
        sector="Health"
      />
    </Content>
  )
}