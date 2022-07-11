import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import Typography from "../../utils/typography";
import Spotify from "../../assets/images/Spotify.png";
import YouTube from "../../assets/images/Youtube.png";
import GooglePodcast from "../../assets/images/Google Podcast.png"

const PlatformContainer = styled(Flex)`
  border-top: 1.5px solid #4d4d4d;
  padding: 4.6rem;
  margin: 0 auto;
  justify-content: space-around;
  border-bottom: 1.5px solid #4d4d4d;
  width: 1160px;
  margin-top: 12rem;
`;

const Platform = () => {
  return (
    <PlatformContainer>
      <Typography font="h3" as="h3">
        Supported by:
      </Typography>
      <img src={Spotify} alt="" className="" />
      <img src={GooglePodcast} alt="" className="" />
      <img src={YouTube} alt="" className="" />
    </PlatformContainer>
  );
}

export default Platform;