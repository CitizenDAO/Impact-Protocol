export default function NFTBondVisualizer({ sector, vestingTerm, totalCDAO, APY, maturationDate }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400 " class="bond-bg-blue">
      <text x="20" y="35" class="light">Citizen DAO Season 1</text>
      <text x="280" y="35" class="light tright">Social Impact Bond</text>
      <text x="20" y="380" class="light">CitizenDAO.com</text>
      <text x="305" y="380" class="light tright">@CitizenDAO</text>

      <text x={textX} y="140" class="heavy">${sector} Bond #169</text>
      <text x={textX} y="160" class="heavy">Minted 11.22.2021</text>

      <text x={textX} y="200" class="heavy">{vestingTerm} Days @ {APY} APY</text>
      <text x={textX} y="220" class="heavy">Compounding Daily</text>

      <text x={textX} y="260" class="heavy">{totalCDAO} CDAO</text>
      <text x={textX} y="280" class="heavy">By {maturationDate}</text>

    </svg>
  )
}

