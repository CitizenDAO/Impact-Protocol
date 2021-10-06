import { PageHeader } from "antd";
import { Link } from 'react-router-dom'
import React from "react";

// displays a page header

export default function Header() {
  return (
    <Link href="/">
     <PageHeader
        title="CitizenDao"
        subTitle="Moonshots for Humanity"
        style={{ cursor: "pointer" }}
      />
    </Link>
  );
}
