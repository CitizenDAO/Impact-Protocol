import { PageHeader } from "antd";
import { Link } from 'react-router-dom'
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/" style={{ width: '100%', zIndex: 990, backgroundColor: 'white' }}>
     <div className="sider-offset">
     <PageHeader
        title="CitizenDao"
        subTitle="Moonshots for Humanity"
        style={{ cursor: "pointer", maxWidth: '1256px', margin: '0px auto' }}
      />
      </div>
    </a>
  );
}
