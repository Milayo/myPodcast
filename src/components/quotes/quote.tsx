import styled from "styled-components";
import Typography from "../../utils/typography";
import Avatar from "../../assets/images/avatar.png";
import Spotify from "../../assets/images/spotify-icon.png";
import QuoteStar from "../../assets/images/quote-star.png";
import QuoteSwirl from "../../assets/images/quote-swirl.png";
import Flex from "../../utils/flex/flex";

const QuoteSectionContainer = styled.div`
  padding: 4rem 0;
  margin: 12rem 14rem 0 14rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.champagne};

  .star {
    position: absolute;
    right: -4.5rem;
    top: -5.5rem;
  }

  .swirl {
    position: absolute;
    top: 19.7rem;
    left: -6rem;
  }
`;

const QuoteSection = () => {
  return (
    <QuoteSectionContainer>
      <img src={QuoteStar} alt="star" className="star" />
      <img src={QuoteSwirl} alt="swirl" className="swirl" />
      <Typography
        font="title"
        as="h1"
        align="center"
        color="#CD4631"
        letterSpacing="-0.02em"
      >
        “
      </Typography>
      <Typography
        font="h2a"
        as="h2"
        align="center"
        letterSpacing="-0.02em"
      >
        One of the best daily podcasts that
        <br />
        covers every topic on Spotify.
      </Typography>
      <Flex justifyContent="center" alignItems="center" gap="1rem" mt="4rem">
        <img src={Avatar} alt="avatar" />
        <Typography
          font="caption"
          as="p"
          align="center"
          fontSize="1.4rem"
        >
          John Smith,
        </Typography>

        <img src={Spotify} alt="spotify" />
        <Typography
          font="captionb"
          as="p"
          align="center"
          fontSize="1.4rem"

        >
          Social Community Manager
        </Typography>
      </Flex>
    </QuoteSectionContainer>
  );
};

export default QuoteSection;
