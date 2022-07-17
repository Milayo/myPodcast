import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import { Button as BaseButton } from "../../components/button/index";
import BlackConnector from "../../assets/images/BlackConnector.png";
import Sparkle from "../../assets/images/Sponsor-sparkle.png";
import Star from "../../assets/images/Sponsor-Star.png";
import Swirl from "../../assets/images/Sponsor-Swirl.png";

interface SponsorCardProps {
  title: string;
  fee: number;
  background?: boolean;
}

const Button = styled(BaseButton)`
  padding: 2rem 3.6rem;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25);
`;

const Tag = styled.div`
  border: 1.5px solid #000000;
  border-radius: 8px;
  width: 34.3rem;
  height: 31rem;
  flex-shrink: 0;
  padding: 4rem 4rem 6rem 4rem;
  background: white;

  li {
    margin-bottom: 1rem;
  }
`;

const CardContainer = styled.div<{ background?: boolean }>`
  border: 1.5px solid rgb(0, 0, 0);
  border-radius: 8px;
  width: 34.3rem;
  height: 31rem;
  flex-shrink: 0;
  padding: 4rem 4rem 3rem 3rem;
  background: white;
  background: ${({ background }) => background === true && "#f7ede8"};
  border: ${({ background }) => background === true && "1.5px solid #cd4631"};

  .label {
    background: #f7ede8;
    color: white;
    padding: 0.3rem 0.6rem;
    background: #cd4631;
    border: 1px solid #cd4631;
    border-radius: 4px;
  }
`;

const SponsorsSectionContainer = styled.div`
  position: relative;
  padding: 14rem;

  .sparkle {
    position: absolute;
    top: 7.7rem;
    left: 28.5rem;
  }

  .star {
    position: absolute;
    top: 30.5rem;
    right: 6.4rem;
    z-index: -200;
  }

  .swirl {
    position: absolute;
    bottom: 10rem;
    left: 7rem;
    z-index: -200;
  }

  .blackconnector {
    left: 50%;
    top: 112.2rem;
    position: absolute;
  }

  .card-grp {
    flex-wrap: wrap;
  }

  .fee {
    width: 7.2rem;
  }

  .uniquetag {
    background: #f7ede8;
    border: 1.5px solid #cd4631;
    border-radius: 8px;
  }
`;

const SectionCard = ({ title, fee, background }: SponsorCardProps) => {
  return (
    <CardContainer background={background}>
      <Flex justifyContent="space-between">
        <Typography font="h2" as="h2">
          {title}
        </Typography>
        {background && (
          <Typography font="smallTextb" as="p" className="label">
            MOST POPULAR
          </Typography>
        )}
      </Flex>

      <Typography font="caption" as="p" mt="2rem" fontSize="1.4rem">
        Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.
      </Typography>
      <Flex justifyContent="space-between" mt="5rem">
        <Button>Subscribe</Button>
        <Flex direction="column" className="fee">
          <Typography font="h3b" as="h3" color="#CD4631">
            ${fee}
          </Typography>
          <Typography font="bodyText" as="h3" color="#4D4D4D">
            /month
          </Typography>
        </Flex>
      </Flex>
    </CardContainer>
  );
};

const SponsorsSection = () => {
  return (
    <SponsorsSectionContainer>
      <img src={Sparkle} alt="sparkle" className="sparkle" />
      <img src={Star} alt="star" className="star" />
      <img src={Swirl} alt="swirl" className="swirl" />
      <Typography font="h1" as="h1" align="center" className="">
        Become our sponsor
      </Typography>
      <Typography font="h3" as="h3" align="center" mt="2rem" mb="10rem">
        Get exclusive episodes, merch and more
      </Typography>
      <Flex className="card-grp" gap="2rem">
        <SectionCard title="Member" fee={9.99} />
        <SectionCard title="Family" fee={14.99} background={true} />
        <SectionCard title="Official" fee={29.99} />
        <Tag>
          <Typography
            font="captionb"
            as="p"
            fontSize="1.4rem"
            mb="2rem"
            color="#4D4D4D"
          >
            What’s included:
          </Typography>
          <ul>
            <li>
              <Typography font="bodyText" as="p">
                Exclusive Content
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                5% Discount on Merch
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Join the Community
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Livestreaming Access
              </Typography>
            </li>
          </ul>
        </Tag>
        <Tag className="uniquetag">
          <Typography
            font="captionb"
            as="p"
            fontSize="1.4rem"
            mb="2rem"
            color="#4D4D4D"
          >
            What’s included:
          </Typography>
          <ul>
            <li>
              <Typography font="bodyTextb" as="p">
                Everything in Tier 1
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Free tickets to Events
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Limited Edition Merch
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Promote your Product
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Request Topic
              </Typography>
            </li>
          </ul>
        </Tag>
        <Tag>
          <Typography
            font="captionb"
            as="p"
            fontSize="1.4rem"
            mb="2rem"
            color="#4D4D4D"
          >
            What’s included:
          </Typography>
          <ul>
            <li>
              <Typography font="bodyTextb" as="p">
                Everything in Tier 2
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Exclusive Badge on Livestreaming
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Become an Official Sponsor
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Early Access to All Episodes
              </Typography>
            </li>
            <li>
              <Typography font="bodyText" as="p">
                Free Stickers and Merch
              </Typography>
            </li>
          </ul>
        </Tag>
      </Flex>
      <img src={BlackConnector} alt="connector" className="blackconnector" />
    </SponsorsSectionContainer>
  );
};

export default SponsorsSection;
