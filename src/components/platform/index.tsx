import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import Typography from "../../utils/typography";
import Spotify from "../../assets/images/Spotify.png";
import YouTube from "../../assets/images/Youtube.png";
import GooglePodcast from "../../assets/images/Google Podcast.png"

const PlatformContainer = styled(Flex)`
  border-top: 1.5px solid #4d4d4d;
  padding: 4.6rem;
  justify-content: space-around;
  border-bottom: 1.5px solid #4d4d4d;
  width: 116rem;
  margin: 12rem auto 0 auto;
`;

const Platform = () => {
  return (
    <PlatformContainer>
      <Typography font="h3" as="h3">
        Supported by:
      </Typography>
      <img src={Spotify} alt="spotify" />
      <img src={GooglePodcast} alt="google-podcast" />
      <img src={YouTube} alt="youtube" />
    </PlatformContainer>
  );
}

export default Platform;