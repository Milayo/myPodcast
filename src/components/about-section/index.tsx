import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import Ideas from "../../assets/images/About-ideas.png";
import Illustration from "../../assets/images/About-Illustration.svg";
import BlackConnector from "../../assets/images/BlackConnector.png";
import QuoteSection from "../quotes/quote";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const AboutSectionContainer = styled.div`
  padding: 14rem 0;
  position: relative;

  .container {
    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      gap: 8rem;
    }
  }

  .ideas {
    max-width: 15rem;
  }

  .illustration {
    max-width: 27rem;
  }

  .blackconnector {
    left: 50%;
    top: 129.5rem;
    position: absolute;

    ${mediaQueries.tabport} {
      top: 122rem;
    }

    ${mediaQueries.phone} {
      top: 116rem;
    }
    @media screen and (max-width: 500px) {
      top: 147rem;
    }

    @media screen and (max-width: 370px) {
      top: 151rem;
    }
  }

  .about-text {
    max-width: 73.5rem;
    margin: auto;
    letter-spacing: -0.02em;
  }

  .picture-text {
    max-width: 45rem;
    @media screen and (max-width: 500px) {
      margin-top: 3rem;
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <Typography font="h1" as="h1" align="center" className="about-text">
        Talk. Listen. Get inspired <br /> by every minute of it.
      </Typography>
      <Flex
        justifyContent="space-around"
        alignItems="flex-end"
        mt="10rem"
        className="container"
      >
        <Flex direction="column">
          <img src={Illustration} alt="illustration" className="illustration" />
          <Typography
            font="bodyText"
            as="p"
            align="center"
            className="picture-text"
            mt="4rem"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </Typography>
        </Flex>
        <Flex direction="column">
          <img src={Ideas} alt="ideas" className="ideas" />
          <Typography
            font="bodyText"
            as="p"
            align="center"
            className="picture-text"
            mt="9.7rem"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </Typography>
        </Flex>
      </Flex>
      {/* <Flex justifyContent="space-around" alignItems="center" mt="10rem">
        <img src={Illustration} alt="illustration" />
        <img src={Ideas} alt="ideas" />
      </Flex>
      <Flex justifyContent="" alignItems="center" gap="21.6rem" mt="4rem">
        <Typography font="bodyText" as="p" align="center" className="picture-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio.
        </Typography>
        <Typography font="bodyText" as="p" align="center" className="picture-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio.
        </Typography>
          </Flex> */}
      <QuoteSection />
      <img src={BlackConnector} alt="connector" className="blackconnector" />
    </AboutSectionContainer>
  );
};

export default AboutSection;
