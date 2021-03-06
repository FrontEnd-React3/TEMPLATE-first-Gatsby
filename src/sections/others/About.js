import React from "react";
import styled from "styled-components";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/portfolio-about.jpg";
import imgSignLight from "../../assets/image/png/signature.png";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto}  id="classpic" alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
Benedikt Lantsoght                </Title>
<Text
                  color="light"
                  className="name mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  Coding in REACT with a
                  minimal and beautiful design in mind is what I aim for.
                </Text>
                <Text color="light" className="mt-4">
                Since July 2019 I am a REACT instructor at
              Intec Brussels. Teaching complex code as simple as possible made me an appreciated
              job-generator for my students.                </Text>
                <div className="mt-4">
                  <Text color="light">Email me at</Text>

                  <Text variant="p">
                    <a
                      href="mailto:B.Lantsoght@gmail.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">B.Lantsoght@gmail.com</Span>
                    </a>
                  </Text>
                </div>
                <div className="mt-5">
                  <img src={imgSignLight}   id="signature" alt="sign" className="img-fluid" />
                </div>
                <Text color="light" className="mt-3">
                  Soldatenstraat 63, 1082 St. Agatha Berchem, Brussel
                </Text>

                <div className="mt-5 d-flex">
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
