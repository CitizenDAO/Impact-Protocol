export default function NFTBondVisualizer({
  sector,
  bondMaturity,
  totalCDAO,
  APY,
  maturationDate,
  tokenNum,
  mintDate,
  className,
}) {
  const textX = '10';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 350 500"
      className={className}
      style={{ borderRadius: '15px', background: 'white', maxHeight: '500px' }}
    >
      <text x={textX} y="240" className="heavy color-w">
        {sector} Bond #{tokenNum}
      </text>
      <text x={textX} y="260" className="heavy color-w">
        Minted {mintDate}
      </text>

      <text x={textX} y="300" className="heavy color-w">
        {bondMaturity} Days @ {APY}% APY
      </text>

      <text x={textX} y="320" className="heavy color-w">
        {totalCDAO.toLocaleString('en-US')} CDAO by {maturationDate}
      </text>

      <text x={textX} y="490" className="light color-w">
        CitizenDAO.io
      </text>
      <text x="250" y="490" className="light tright color-w">
        @CitizenDAO
      </text>
    </svg>
  );
}
