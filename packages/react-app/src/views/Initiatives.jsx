import { Col, Row, Typography } from 'antd';
import React from 'react';
import InitiativeCard from '../components/InitiativeCard';

export default class Initiatives extends React.Component {
  state = {
    active: true,
    block: false,
    size: 'default',
    buttonShape: 'default',
    avatarShape: 'circle',
    initiatives: [
      {
        header: 'Goal 1',
        subHeader: '',
        description: 'End poverty in all its forms everywhere.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg1',
        headerImg: 'sdg-icons/E-WEB-Goal-01.png',
      },
      {
        header: 'Goal 2',
        subHeader: '',
        description: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg2',
        headerImg: 'sdg-icons/E-WEB-Goal-02.png',
      },
      {
        header: 'Goal 3',
        subHeader: '',
        description: 'Ensure healthy lives and promote well-being for all at all ages.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg3',
        headerImg: 'sdg-icons/E-WEB-Goal-03.png',
      },
      {
        header: 'Goal 4',
        subHeader: '',
        description:
          'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg4',
        headerImg: 'sdg-icons/E-WEB-Goal-04.png',
      },
      {
        header: 'Goal 5',
        subHeader: '',
        description: 'Achieve gender equality and empower all women and girls.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg5',
        headerImg: 'sdg-icons/E-WEB-Goal-05.png',
      },
      {
        header: 'Goal 6',
        subHeader: '',
        description: 'Ensure availability and sustainable management of water and sanitation for all.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg6',
        headerImg: 'sdg-icons/E-WEB-Goal-06.png',
      },
      {
        header: 'Goal 7',
        subHeader: '',
        description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg7',
        headerImg: 'sdg-icons/E-WEB-Goal-07.png',
      },
      {
        header: 'Goal 8',
        subHeader: '',
        description:
          'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg8',
        headerImg: 'sdg-icons/E-WEB-Goal-08.png',
      },
      {
        header: 'Goal 9',
        subHeader: '',
        description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg9',
        headerImg: 'sdg-icons/E-WEB-Goal-09.png',
      },
      {
        header: 'Goal 10',
        subHeader: '',
        description: 'Reduce inequality within and among countries.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg10',
        headerImg: 'sdg-icons/E-WEB-Goal-10.png',
      },
      {
        header: 'Goal 11',
        subHeader: '',
        description: 'Make cities and human settlements inclusive, safe, resilient and sustainable.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg11',
        headerImg: 'sdg-icons/E-WEB-Goal-11.png',
      },
      {
        header: 'Goal 12',
        subHeader: '',
        description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg12',
        headerImg: 'sdg-icons/E-WEB-Goal-12.png',
      },
      {
        header: 'Goal 13',
        subHeader: '',
        description: 'Take urgent action to combat climate change and its impacts.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg13',
        headerImg: 'sdg-icons/E-WEB-Goal-13.png',
      },
      {
        header: 'Goal 14',
        subHeader: '',
        description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg14',
        headerImg: 'sdg-icons/E-WEB-Goal-14.png',
      },
      {
        header: 'Goal 15',
        subHeader: '',
        description:
          'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg15',
        headerImg: 'sdg-icons/E-WEB-Goal-15.png',
      },
      {
        header: 'Goal 16',
        subHeader: '',
        description:
          'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg16',
        headerImg: 'sdg-icons/E-WEB-Goal-16.png',
      },
      {
        header: 'Goal 17',
        subHeader: '',
        description:
          'Strengthen the means of implementation and revitalize the global partnership for sustainable development.',
        CTAText: 'Learn More',
        CTALink: '/initiatives/sdg18',
        headerImg: 'sdg-icons/E-WEB-Goal-17.png',
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
    const { active, size, buttonShape, avatarShape, block, healthData, initiatives } = this.state;
    console.log(this.state.initiatives);
    return (
      <div>
        <Row gutter={[20, 40]} justify="center">
          {this.state.initiatives.map(item => {
            return (
              <Col sm={24} md={12} lg={8}>
                <InitiativeCard
                  headerImg={item.headerImg}
                  header={item.header}
                  subHeader={item.subHeader}
                  description={item.description}
                  CTALink={item.CTALink}
                  CTAText={item.CTAText}
                  initiativeData={item.initiativeData}
                  onClick={() => {document.getElementsByClassName('main__layout')[0].scrollTo(0,0);}}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
