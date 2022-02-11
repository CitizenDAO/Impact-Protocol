export default function NFTBondVisualizer({
  sector,
  bondMaturity,
  totalCDAO,
  APY,
  maturationDate,
  tokenNum,
  mintDate,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  className,
  background,
}) {
  const textX = '40';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400 "
      className={className}
      style={{ borderRadius: '15px', background: background }}
    >
      <text x="20" y="35" class="light color-w">
        {topLeft}
      </text>
      <text x="280" y="35" class="light tright color-w">
        {topRight}
      </text>
      <text x="20" y="380" class="light color-w">
        {bottomLeft}
      </text>
      <text x="305" y="380" class="light tright color-w">
        {bottomRight}
      </text>

      <text x={textX} y="140" class="heavy color-w">
        {sector} Bond #{tokenNum}
      </text>
      <text x={textX} y="160" class="heavy color-w">
        Minted {mintDate}
      </text>

      <text x={textX} y="200" class="heavy color-w">
        {bondMaturity} Days @ {APY}% APY
      </text>
      <text x={textX} y="220" class="heavy color-w">
        Compounding Daily
      </text>

      <text x={textX} y="260" class="heavy color-w">
        {totalCDAO.toLocaleString('en-US')} CDAO
      </text>
      <text x={textX} y="280" class="heavy color-w">
        By {maturationDate}
      </text>
    </svg>
  );
}
