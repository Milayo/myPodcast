import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import Typography from "../../utils/typography";
import Spotify from "../../assets/images/Spotify.png";
import YouTube from "../../assets/images/Youtube.png";
import GooglePodcast from "../../assets/images/Google Podcast.png";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const PlatformContainer = styled(Flex)`
  border-top: 1.5px solid #4d4d4d;
  padding: 4.6rem;
  justify-content: space-around;
  border-bottom: 1.5px solid #4d4d4d;
  width: 116rem;
  margin: 12rem auto 0 auto;

  ${mediaQueries.tabport} {
    width: 90%;
    justify-content: space-between;
    padding: 3rem 0;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 3rem;
    border: none;
    margin: 6rem auto;
    padding: 2rem 0;
  }

  .img {
    ${mediaQueries.tabport} {
      max-width: 11rem;
    }

    ${mediaQueries.phone} {
      max-width: 9rem;
    }

    @media screen and (max-width: 400px) {
      max-width: 11rem;
    }
  }

  .img2 {
    ${mediaQueries.tabport} {
      max-width: 21rem;
    }

    ${mediaQueries.phone} {
      max-width: 15rem;
    }

    @media screen and (max-width: 400px) {
      max-width: 21rem;
    }
  }
`;

const Platform = () => {
  return (
    <PlatformContainer>
      <Typography font="h3" as="h3">
        Supported by:
      </Typography>
      <img src={Spotify} alt="spotify" className="img" />
      <img src={GooglePodcast} alt="google-podcast" className="img2" />
      <img src={YouTube} alt="youtube" className="img" />
    </PlatformContainer>
  );
};

export default Platform;
