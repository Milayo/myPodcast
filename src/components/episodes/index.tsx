import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import { Button as BaseButton } from "../../components/button/index";
import BlackConnector from "../../assets/images/BlackConnector.png";
import { mediaQueries } from "../../utils/themes/mediaQueries";
import Sparkle from "../../assets/images/Episode-sparkle.png";
import Avatar1 from "../../assets/images/Episode-avatar1.png";
import Avatar2 from "../../assets/images/Episode-avatar2.png";
import Episode1 from "../../assets/images/Episode1.png";
import Episode2 from "../../assets/images/Episode2.png";
import Episode3 from "../../assets/images/Episode3.png";
import Episode4 from "../../assets/images/Episode4.png";
import Episode6 from "../../assets/images/Episode5.png";
import Episode5 from "../../assets/images/Episode6.png";

interface CardProps {
  title: string;
  image: any;
  shadow?: boolean;
  episode: number;
  tag1: string;
  tag2: string;
}

const Button = styled(BaseButton)`
  padding: 20px 36px;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25);
  margin: 10rem auto 0 auto;
  max-width: 26.3rem;

  ${mediaQueries.tabland} {
    padding: 20px 30px;
  }

  ${mediaQueries.tabport} {
    padding: 15px;
  }
`;

const CardContainer = styled.div<{ shadow?: boolean }>`
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: ${({ shadow }) => shadow === true && "10px 10px 0px #81adc8"};
  border-radius: 12px;
  padding: 1.6rem;
  width: 52rem;
  flex-shrink: 0;

  ${mediaQueries.tabport} {
    width: 45rem;
  }

  @media screen and (max-width: 750px) {
    width: 75%;
    padding: 2.5rem;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 1rem;
  }

  .episode-title {
    border-bottom: 0.5px solid #4d4d4d;
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ shadow }) => shadow === true && "#CD4631"};

    ${mediaQueries.tabport} {
      padding-bottom: 0.5rem;
    }
  }

  .episode-cover {
    max-width: 16rem;
    ${mediaQueries.tabport} {
      max-width: 14rem;
    }

    @media screen and (max-width: 750px) {
      max-width: 16rem;
    }
  }

  .tag {
    border: 1px solid #4d4d4d;
    border-radius: 4px;
    padding: 0.6rem 1.2rem;
  }

  .grp {
    margin-top: 2rem;
  }

  .img {
    margin-left: -0.5rem;
  }
`;

const EpisodesContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.champagne};
  position: relative;
  z-index: -1;

  ${mediaQueries.bigdesktop} {
    padding: 14rem 7rem;
  }
  ${mediaQueries.tabland} {
    padding: 14rem 2rem;
  }

  .cardlist {
    flex-wrap: wrap;

    
  @media screen and (max-width: 750px) {
    gap: 5rem;
  }

  }

  .sparkle {
    position: absolute;
    top: 19rem;
    right: 0;
    max-width: 20rem;

    ${mediaQueries.tabport} {
      max-width: 16rem;
    }

     @media screen and (max-width: 500px) {
       max-width: 12rem;
       top: 22rem;
     }
  }

  .blackconnector {
    left: 50%;
bottom: -9rem;
    position: absolute;

     ${mediaQueries.tabport} {
       bottom: -10rem;
     }
  }
`;

const EpisodeCard = ({
  image,
  shadow,
  title,
  episode,
  tag1,
  tag2,
}: CardProps) => {
  return (
    <CardContainer shadow={shadow}>
      <Flex gap="2rem" justifyContent="space-between">
        <img src={image} alt="episode-cover" className="episode-cover" />
        <div>
          <Typography
            font="bodyTextb"
            as="p"
            className="episode-text"
            color="#CD4631"
          >
            Eps. {episode}
          </Typography>
          <Typography font="h3b" as="p" className="episode-title">
            {title}
          </Typography>
          <Typography font="caption" as="p" fontSize="1.4rem">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Curabitur ac ultrices odio.
          </Typography>
        </div>
      </Flex>
      <Flex justifyContent="space-between" className="grp">
        <Flex justifyContent="start" gap="0.6rem">
          <Typography font="smallText" as="p" className="tag">
            {tag1}
          </Typography>
          <Typography font="smallText" as="p" className="tag">
            {tag2}
          </Typography>
        </Flex>
        <Flex gap="1rem">
          <Typography font="smallTextb" as="p" className="host" color="#4D4D4D">
            Hosted by:
          </Typography>
          <Flex>
            <img src={Avatar1} alt="avatar" />
            <img src={Avatar2} alt="avatar" className="img" />
          </Flex>
        </Flex>
      </Flex>
    </CardContainer>
  );
};

const EpisodesSection = () => {
  return (
    <EpisodesContainer>
      <img src={Sparkle} alt="sparkle" className="sparkle" />
      <Typography font="h1" as="h1" align="center" className="">
        Recent Episodes
      </Typography>
      <Typography
        font="h3"
        as="h3"
        align="center"
        mt="2rem"
        mb="10rem"
        className=""
      >
        Available on your favorite platform
      </Typography>
      <Flex className="cardlist" gap="2rem">
        <EpisodeCard
          image={Episode6}
          shadow={true}
          title="Pandemic Becoming Endemic"
          episode={6}
          tag1="covid19"
          tag2="health"
        />
        <EpisodeCard
          image={Episode5}
          title="Tesla Autopilot Controversy"
          episode={5}
          tag1="automation"
          tag2="tech"
        />
        <EpisodeCard
          image={Episode4}
          title="Women's Rights? Is it alright?"
          episode={4}
          tag1="women's right"
          tag2="right"
        />
        <EpisodeCard
          image={Episode3}
          shadow={true}
          title="How to Deal with Self–Confidence"
          episode={3}
          tag1="self-esteem"
          tag2="health"
        />
        <EpisodeCard
          image={Episode2}
          shadow={true}
          title="Type of Social Classes of People"
          episode={2}
          tag1="social class"
          tag2="wealth"
        />
        <EpisodeCard
          image={Episode1}
          title="Are you a Perplexed Mind Person?"
          episode={1}
          tag1="mind-behaviour"
          tag2="health"
        />
      </Flex>
      <Button>Browse All Episodes</Button>
      <img src={BlackConnector} alt="connector" className="blackconnector" />
    </EpisodesContainer>
  );
};

export default EpisodesSection;
