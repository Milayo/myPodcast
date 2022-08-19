import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import { Button as BaseButton } from "../../components/button/index";
import YouTube from "../../assets/images/CTA-Youtube.png";
import Spotify from "../../assets/images/CTA-Spotify.png";
import GooglePodcast from "../../assets/images/CTA-googlepodcast.png";
import Sparkle1 from "../../assets/images/CTA-Sparkle1.png";
import Sparkle2 from "../../assets/images/CTA-Sparkle2.png";
import Sparkle3 from "../../assets/images/CTA-Sparkle3.png";
import Sparkle4 from "../../assets/images/CTA-Sparkle4.png";
import Home from "../../assets/images/CTA-Home.png";
import Play from "../../assets/images/CTA-Play.png";
import Swirl from "../../assets/images/CTA-Swirl.png";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const Button = styled(BaseButton)`
  padding: 2rem 3.6rem;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25);
  width: 22rem;
  margin: 14rem auto 2.4rem auto;
   ${mediaQueries.phone} {
      margin-top: 10rem;
    }

    @media screen and (max-width: 500px) {
      margin-top: 5rem;
    }
`;

const CTAContainer = styled.div`
  background: ${({ theme }) => theme.colors.lighterBlue};
  padding: 14rem 0;
  position: relative;
  z-index: -2;

  .tag {
    color: #cd4631;
    border: 1px solid #cd4631;
    border-radius: 4px;
    width: 5.2rem;
    margin: 0 auto 2rem auto;
  }

  .title {
    max-width: 52rem;
    margin: 0 auto 2.8rem auto;
  }

  .sparkle1 {
    position: absolute;
    top: 47rem;
    left: 57%;
    max-width: 12rem;
    
    ${mediaQueries.tabport} {
      max-width: 9rem;
      top: 44rem;
    }

    ${mediaQueries.phone} {
      max-width: 6rem;
      top: 37rem;
      left: 60%;
    }

    @media screen and (max-width: 500px) {
      top: 33rem;
      left: 63%;
    }
     @media screen and (max-width: 400px) {
       left: 67%;
     }
  }
  .sparkle2 {
    position: absolute;
    top: 36rem;
    left: 10.1rem;
    width: 2.5rem;
    ${mediaQueries.tabport} {
      left: 8rem;
    }
  }
  .sparkle3 {
    position: absolute;
    top: 37.7rem;
    left: 11.5rem;
    max-width: 6rem;
    ${mediaQueries.tabport} {
      max-width: 4rem;
      left: 9rem;
    }
  }
  .sparkle4 {
    position: absolute;
    top: 37.5rem;
    left: 0rem;
    z-index: 500;
    max-width: 14rem;

    ${mediaQueries.tabport} {
      max-width: 12rem;
    }

    ${mediaQueries.phone} {
      max-width: 8rem;
    }
  }

  .play {
    position: absolute;
    max-width: 37.3rem;
    height: auto;
    bottom: 0rem;
    right: 0rem;

    ${mediaQueries.tabport} {
      max-width: 25rem;
    }

    ${mediaQueries.phone} {
      max-width: 23rem;
    }

    @media screen and (max-width: 500px) {
      max-width: 14rem;
    }
    @media screen and (max-width: 400px) {
      max-width: 12rem;
    }
  }

  .swirl {
    position: absolute;
    right: 12.1rem;
    bottom: 0rem;
    z-index: -100;
    max-width: 20rem;
    ${mediaQueries.tabport} {
      max-width: 15rem;
    }

    ${mediaQueries.phone} {
      max-width: 10rem;
      right: 7rem;
    }
  }

  .home {
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    max-width: 37.3rem;
    height: auto;

    ${mediaQueries.tabport} {
      max-width: 26rem;
    }

    ${mediaQueries.phone} {
      max-width: 23rem;
    }

    @media screen and (max-width: 500px) {
      max-width: 15rem;
    }
  }
`;

const CTASection = () => {
  return (
    <CTAContainer>
      <Typography font="captionb" as="p" align="center" className="tag">
        BETA
      </Typography>
      <Typography font="h1" as="h1" align="center" className="title">
        Available now Pod of Cast App
      </Typography>
      <Typography font="h3" as="h3" align="center" color="#4D4D4D">
        We just launched our podcast app!
      </Typography>
      <Button>Download Now</Button>
      <Typography
        font="caption"
        as="p"
        align="center"
        fontSize="1.4rem"
        color="#4D4D4D"
      >
        Content also available on:
      </Typography>
      <Flex mt="1rem" gap="2rem">
        <img
          src={GooglePodcast}
          alt="GooglePodcast"
          className="googlePodcast"
        />
        <img src={Spotify} alt="Spotify" className="spotify" />
        <img src={YouTube} alt="YouTube" className="youTube" />
      </Flex>
      <img src={Sparkle1} alt="Sparkle1" className="sparkle1" />
      <img src={Sparkle2} alt="Sparkle2" className="sparkle2" />
      <img src={Sparkle3} alt="Sparkle3" className="sparkle3" />
      <img src={Sparkle4} alt="Sparkle4" className="sparkle4" />
      <img src={Home} alt="Home" className="home" />
      <img src={Play} alt="Play" className="play" />
      <img src={Swirl} alt="Swirl" className="swirl" />
    </CTAContainer>
  );
};

export default CTASection;
