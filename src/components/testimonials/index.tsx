import styled from "styled-components";
import Typography from "../../utils/typography";
import Sparkle from "../../assets/images/Sparkle.png";
import LeftArrow from "../../assets/images/Arrow - Left Circle.png";
import RightArrow from "../../assets/images/Arrow - Right Circle (1).png";
import Avatar1 from "../../assets/images/testimonial-avatar1.png";
import Avatar2 from "../../assets/images/testimonial-avatar2.png";
import Avatar3 from "../../assets/images/testimonial-avatar3.png";
import Spotify from "../../assets/images/testimonial-spotify.png";
import GooglePodcasts from "../../assets/images/testimonial-podcast.png";
import BlackConnector from "../../assets/images/BlackConnector.png";
import Flex from "../../utils/flex/flex";
import { mediaQueries } from "../../utils/themes/mediaQueries";

interface TestimonialCardProps {
  name: string;
  image: any;
  image2: any;
}

const CardContainer = styled.div`
  background-color: white;
  max-width: 57rem;
  padding: 4rem;
  ${mediaQueries.phone} {
    padding: 2rem;
  }
  
`;

const TestimonialContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lighterBlue};
  z-index: -2;

  .container {
    position: relative;
    padding: 14rem 0 10.55rem 14rem;

    ${mediaQueries.tabport} {
      padding: 12rem 6rem;
    }

    ${mediaQueries.phone} {
      padding: 12rem 4rem;
    }
  }

  .arrow-container {
    width: 11.6rem;
  }

  .card_container {
    overflow-x: auto;
    padding-bottom: 1rem;

    > * {
      flex-shrink: 0;
    }

    ::-webkit-scrollbar {
      height: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.grey};
      border-radius: 1rem;
    }
  }

  .sparkle {
    position: absolute;
    top: 6.5rem;
    left: 20%;
    max-width: 10.5rem;
    height: auto;
    ${mediaQueries.tabport} {
      top: 2rem;
      left: 13%;
    }

    ${mediaQueries.phone} {
      max-width: 8rem;
      top: 4rem;
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

const TestimonialCard = ({ name, image, image2 }: TestimonialCardProps) => {
  return (
    <CardContainer>
      <Typography font="title" as="h1" color="#CD4631" fontSize="9.6rem">
        “
      </Typography>
      <Typography font="h3" as="h3">
        Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor
        incidi ut labore et dolore magna aliqua.
      </Typography>
      <Flex justifyContent="start" alignItems="center" gap="1rem" mt="3.2rem" >
        <img src={image} alt="avatar" />
        <Typography font="caption" as="p" fontSize="1.4rem">
          {name}
        </Typography>
        <img src={image2} alt="platform" />
      </Flex>
    </CardContainer>
  );
};

const Testimonials = () => {
  return (
    <TestimonialContainer>
      <div className="container">
        <img src={Sparkle} alt="sparkle" className="sparkle" />
        <Typography font="h1" as="h1" align="center" mb="2rem">
          What our listeners say
        </Typography>
        <Typography font="h3" as="h3" align="center" color="#4D4D4D" mb="10rem">
          Their experience throughout every platform
        </Typography>
        <Flex justifyContent="flex-start" gap="2rem" className="card_container">
          <TestimonialCard
            name="Luna Lovegood,"
            image={Avatar1}
            image2={Spotify}
          />
          <TestimonialCard
            name="Emily Blunt,"
            image={Avatar2}
            image2={GooglePodcasts}
          />
          <TestimonialCard
            name="Mia Winters,"
            image={Avatar3}
            image2={Spotify}
          />
          <TestimonialCard
            name="Luna Lovegood,"
            image={Avatar1}
            image2={Spotify}
          />
        </Flex>
        <Flex
          justifyContent="start"
          alignItems="center"
          gap="2rem"
          mt="6rem"
          className="arrow-container"
        >
          <img src={LeftArrow} alt="arrow" />
          <img src={RightArrow} alt="arrow" />
        </Flex>
        <img src={BlackConnector} alt="connector" className="blackconnector" />
      </div>
    </TestimonialContainer>
  );
};

export default Testimonials;
