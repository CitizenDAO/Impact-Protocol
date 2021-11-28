import { Card, Typography } from 'antd';
import React from 'react';
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    days: 30,
    futureValue: 1504,
  },
  {
    days: 60,
    futureValue: 2262,
  },
  {
    days: 90,
    futureValue: 3403,
  },
  {
    days: 180,
    futureValue: 11580,
  },
  {
    days: 360,
    futureValue: 134091,
  },
];

export default function InitiativessChart({
  route,
  chartData = data,
  ETHBondAmount,
  bondMaturity,
  CDAOYield,
  initCDAO,
}) {
  const { Text, Title } = Typography;

  return (
    <Card style={styles.card}>
      <Title level={3} type="secondary" style={{ textAlign: 'left' }}>
        Estimated Yield
      </Title>

      <div style={{ textAlign: 'left', marginBottom: 20 }}>
        <Text underline strong>
          {ETHBondAmount} ETH
        </Text>{' '}
        generates{' '}
        <Text strong underline>
          {CDAOYield} CDAO
        </Text>{' '}
        after{' '}
        <Text strong underline>
          {bondMaturity} days
        </Text>
      </div>

      <ResponsiveContainer width="100%" height={475}>
        <LineChart
          width="100%"
          height="100%"
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="days">
            <Label value="Days" offset={-8} position="bottom" />
          </XAxis>
          {/* scale="log" domain={["auto", "auto"]} */}
          <YAxis dataKey="futureValue" domain={[initCDAO, 'auto']}>
            {/* <Label angle={-90} offset={-5} position="inside" value="Future Value (Amount of CDAOs)" /> */}
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="futureValue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

const styles = {
  card: {
    padding: '10px',
    borderRadius: '15px',
    boxShadow:
      'inset -8px -8px 12px rgb(255 255 255 / 15%), 8px 8px 30px rgb(174 174 192 / 35%), inset -8px -8px 12px rgb(255 255 255 / 15%), inset 8px 8px 8px rgb(174 174 192 / 4%)',
  },
  row: {
    display: 'block',
    padding: '1em 1.5em',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px 0 rgba(0, 0, 0, 0.25)',
  },
};
