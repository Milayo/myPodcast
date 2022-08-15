import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import { Button as BaseButton } from "../../components/button/index";
import BlackScribble from "../../assets/images/BlackScribble.png";
import Scribble from "../../assets/images/Scribble.png";
import ShiningStars from "../../assets/images/Shining stars.png";
import Smile from "../../assets/images/Face 1.png";
import Face from "../../assets/images/Face 5.png";
import Fire from "../../assets/images/Fire.png";
import Star from "../../assets/images/Star.png";
import BlackConnector from "../../assets/images/BlackConnector.png";
import { mediaQueries } from "../../utils/themes/mediaQueries";

interface CardProps {
  title: string;
  image: any;
}

const Button = styled(BaseButton)`
  padding: 20px 30px;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25);
  margin: 10rem auto 0 auto;
  max-width: 18rem;

   ${mediaQueries.phone} {
     padding: 15px 25px;
   }
`;

const CardContainer = styled(Flex)`
  flex-direction: column;
  width: 32rem;
  flex-shrink: 0;

  ${mediaQueries.phone} {
    width: 30rem;
  }

  @media screen and (max-width: 500px) {
    width: 75%;
  }
`;

const SectionContainer = styled.div`
  padding: 14rem 8rem;
  position: relative;
  max-width: 1440px;
  margin: auto;

  ${mediaQueries.tabport} {
    padding: 14rem 5rem;
  }

  ${mediaQueries.phone} {
    padding: 14rem 2rem;
  }

  .cardlist {
    gap: 8.6rem 2rem;
    flex-wrap: wrap;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      gap: 8rem;
    }
  }

  .scribble {
    position: absolute;
    top: 4.6rem;
    right: 20%;
    max-width: 19rem;

    ${mediaQueries.tabport} {
      max-width: 15rem;
    }

    ${mediaQueries.phone} {
      max-width: 12rem;
    }
  }

  .blackconnector {
    left: 50%;
    bottom: -8rem;
    position: absolute;

    ${mediaQueries.tabland} {
     bottom: -10rem;
    }
  }
`;

const FeatureSectionCard = ({ image, title }: CardProps) => {
  return (
    <CardContainer>
      <img src={image} alt="feature" />
      <Typography font="h3b" as="h3" align="center" mt="2rem" className="">
        {title}
      </Typography>
      <Typography font="bodyText" as="p" align="center" mt="2rem" className="">
        Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
        tempor.
      </Typography>
    </CardContainer>
  );
};

const FeaturesSection = () => {
  return (
    <SectionContainer>
      <img src={BlackScribble} alt="scribble" className="scribble" />
      <Typography font="h1" as="h1" align="center" className="">
        Membership benefits
      </Typography>
      <Typography font="h3" as="h3" align="center" mt="2rem" className="">
        Become our sponsor and get all benefits
      </Typography>
      <Flex justifyContent="space-between" className="cardlist" mt="10rem">
        <FeatureSectionCard image={Scribble} title="Topic by Request" />
        <FeatureSectionCard image={ShiningStars} title="Exclusive Content" />
        <FeatureSectionCard image={Smile} title="Join the Community" />
        <FeatureSectionCard image={Face} title="Livestreaming Access" />
        <FeatureSectionCard image={Fire} title="Exclusive Episodes & Merch" />
        <FeatureSectionCard image={Star} title="And much more!" />
      </Flex>
      <Button>See Pricing</Button>
      <img src={BlackConnector} alt="connector" className="blackconnector" />
    </SectionContainer>
  );
};

export default FeaturesSection;
