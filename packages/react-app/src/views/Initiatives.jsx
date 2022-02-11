import { Col, Row, Typography } from 'antd';
import React from 'react';
import InitiativeCard from '../components/InitiativeCard';

export default class Initiatives extends React.Component {
  state = {
    active: true,
    initiatives: [
      {
        header: '$Health',
        description:
          'No one should go without basic healthcare, clean water, and nutritious food. We aim to build a decentralized health R&D fund to meet these needs.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/health',
        headerImg: 'sdg-icons/E-WEB-Goal-01.png',
      },
      {
        header: '$Housing',
        description:
          'Everyone needs a roof, bed, and clean water to live optimally. We will leverage 3D printing, material science, and robotics to build houses 10x cheaper & 10x faster.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/housing',
        headerImg: 'sdg-icons/E-WEB-Goal-01.png',
      },
      {
        header: '$Education',
        description:
          'Everyone should be able to learn whatever they want and apply it to earn income. We will cultivate the best online learning methods and scale to people who want it.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/education',
        headerImg: 'sdg-icons/E-WEB-Goal-01.png',
      },
      {
        header: '$Climate',
        description:
          'We’re all on this spinning rock together. It’s time we treat Earth better and start leveraging renewable energy',
        CTAText: 'Learn More',
        CTALink: '/initiatives/climate',
        headerImg: 'sdg-icons/E-WEB-Goal-01.png',
      },
      {
        header: '$Finance',
        description:
          'We all should be able to store wealth securely away from governments. We’ll combine the best money legos to jumpstart financial prosperity.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/finance',
        headerImg: 'sdg-icons/E-WEB-Goal-01.png',
      },
      {
        header: '$Governance',
        description:
          'Are you happy with your government? We have a unique opportunity to rethink governance and build something better.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/governance',
        headerImg: 'sdg-icons/E-WEB-Goal-01.png',
      },
    ],
  };

  handleActiveChange = checked => {
    this.setState({ active: checked });
  };

  handleBlockChange = checked => {
    this.setState({ block: checked });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  handleShapeChange = prop => e => {
    this.setState({ [prop]: e.target.value });
  };

  render() {
    const { Title } = Typography;
    const { active, initiatives } = this.state;
    console.log(this.state.initiatives);
    return (
      <div>
        <Row gutter={[20, 40]} justify="center">
          {this.state.initiatives.map(item => {
            return (
              <Col span={8}>
                <InitiativeCard
                  headerImg={item.headerImg}
                  header={item.header}
                  description={item.description}
                  CTALink={item.CTALink}
                  CTAText={item.CTAText}
                  initiativeData={item.initiativeData}
                  onClick={() => {
                    document.getElementsByClassName('main__layout')[0].scrollTo(0, 0);
                  }}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
