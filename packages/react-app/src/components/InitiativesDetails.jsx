import { Card, List, Typography } from "antd";
import React from "react";

const descriptions = [
  { title: "Planting Trees", content: "Working with Terraformation, we're planting as many trees as possible." },
  {
    title: "Preserving Rainforests",
    content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
  },
  {
    title: "Converting Waste to Graphene",
    content: "A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.",
  },
];

export default function InitiativesDetails({ route, pageDescription = descriptions }) {
  const { Text, Title } = Typography;

  return (
    <Card style={styles.card}>
      <Text type="secondary">$Climate bonds sold during Season 1 will fund the following projects:</Text>

      <List
        dataSource={pageDescription}
        style={{ marginTop: "2em" }}
        renderItem={(item, i) => (
          <List.Item
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-start",
              textAlign: "left",
              justifyContent: "flex-start",
              fontSize: "0.8rem",
            }}
          >
            <Title level={3}>{item.title}</Title>
            <Text>{item.content}</Text>
          </List.Item>
        )}
      />
    </Card>
  );
}

const styles = {
  card: {
    padding: "10px",
    borderRadius: "15px",
    boxShadow:
      "inset -8px -8px 12px rgb(255 255 255 / 15%), 8px 8px 30px rgb(174 174 192 / 35%), inset -8px -8px 12px rgb(255 255 255 / 15%), inset 8px 8px 8px rgb(174 174 192 / 4%)",
  },
  row: {
    display: "block",
    padding: "1em 1.5em",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow:
      "inset -8px -8px 12px rgb(255 255 255 / 15%), 8px 8px 30px rgb(174 174 192 / 35%), inset -8px -8px 12px rgb(255 255 255 / 15%), inset 8px 8px 8px rgb(174 174 192 / 4%)",
    fontSize: "0.9rem",
  },
};
