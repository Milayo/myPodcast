import Cover1 from "../../assets/images/cover1.png";
import Cover2 from "../../assets/images/cover2.png";
import Cover3 from "../../assets/images/cover3.png";
import Cover4 from "../../assets/images/cover4.png";
import Cover5 from "../../assets/images/cover5.png";
import Cover6 from "../../assets/images/cover6.png";
import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const CardArray = [
  {
    image: Cover1,
    text: "Perplexed Mind",
  },
  {
    image: Cover2,
    text: "Tesla Autopilot",
  },
  {
    image: Cover3,
    text: "Women's Rights",
  },
  {
    image: Cover4,
    text: "Social Class",
  },
  {
    image: Cover5,
    text: "COVID-19 Endemic",
  },
  {
    image: Cover6,
    text: "Self-Confidence",
  },
];

const CardContainer = styled(Flex)`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 0.5rem;

  ::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 1rem;
    width: 200px;
  }

  .card {
    flex-shrink: 0;
    position: relative;
    scroll-snap-align: start;
  }

  .card-image {
    width: 37.3rem;
    height: 37.3rem;

    ${mediaQueries.phone} {
      max-width: 25rem;
      height: auto;
    }
  }

  .card-text {
    position: absolute;
    left: 2rem;
    top: 30.2rem;

    ${mediaQueries.phone} {
     top: 21rem;
     left: 1rem;
    }
  }
`;

const CoverCards = () => {
  return (
    <CardContainer gap="2rem">
      {CardArray.map((item) => (
        <div className="card">
          <img src={item.image} alt={item.text} className="card-image" />
          <Typography
            font="h2"
            as="h2"
            color="#81ADC8"
            className="card-text"
            letterSpacing="-0.08em"
          >
            {item.text}
          </Typography>
        </div>
      ))}
    </CardContainer>
  );
};

export default CoverCards;
