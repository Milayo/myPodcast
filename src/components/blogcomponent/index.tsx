import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import { Button as BaseButton } from "../../components/button/index";
import RedConnector from "../../assets/images/RedConnector.png";
import Image1 from "../../assets/images/blog-image1.png";
import Image2 from "../../assets/images/blog-image2.png";
import Swirl from "../../assets/images/Blog-swirl.png";
import Star from "../../assets/images/Blog-Star.png";
import { mediaQueries } from "../../utils/themes/mediaQueries";

interface BlogCardProps {
  image: any;
  title: string;
  subtitle: string;
  tag1: string;
  tag2: string;
  time: string;
  boxShadow?: boolean;
}

const Button = styled(BaseButton)`
  padding: 2rem 3.6rem;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  border: 2px solid #000000;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-width: 18.2rem;
  margin: auto;
  margin-top: 10rem;
`;

const BlogContainer = styled.div`
  padding: 14rem;
  position: relative;

  ${mediaQueries.tabport} {
    padding: 14rem 8rem;
  }

  ${mediaQueries.phone} {
    padding: 14rem 3rem;
  }

  @media screen and (max-width: 500px) {
    padding: 14rem 5rem;
  }
  .Redconnector {
    left: 50%;
    top: 123.2rem;
    position: absolute;
  }

  .star {
    position: absolute;
    z-index: -100;
    top: 29.8rem;
    left: 4.3rem;
    ${mediaQueries.tabport} {
      max-width: 15rem;
    }

    ${mediaQueries.phone} {
     left: 1rem;
      max-width: 12rem;
    }
  }
  .swirl {
    position: absolute;
    bottom: 19.1rem;
    right: 4rem;
    max-width: 19rem;

    ${mediaQueries.tabport} {
      max-width: 15rem;
    }

    ${mediaQueries.phone} {
      max-width: 10rem;
    }
  }

  .grp {
    @media screen and (max-width: 500px) {
      flex-direction: column;
      gap: 3rem;
    }
  }
`;

const CardContainer = styled.div<{ boxShadow?: boolean }>`
  padding: 1.6rem;
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: ${({ boxShadow }) =>
    boxShadow === true && "10px 10px 0px #000000"};
  border-radius: 8px;

  .title {
    color: ${({ boxShadow }) => boxShadow === true && "#CD4631"};
  }

  .card-footer {
    border-top: 0.5px solid #4d4d4d;
    padding-top: 2.6rem;

    .tag {
      border: 1px solid #4d4d4d;
      border-radius: 4px;
      padding: 6px 12px;
      color: #4d4d4d;
    }
  }
`;

const BlogCard = ({
  image,
  boxShadow,
  tag1,
  tag2,
  time,
  title,
  subtitle,
}: BlogCardProps) => {
  return (
    <CardContainer boxShadow={boxShadow}>
      <img src={image} alt="Image"/>
      <Typography
        font="captionb"
        as="p"
        mt="4rem"
        fontSize="1.6rem"
        color="#4D4D4D"
      >
        {subtitle}
      </Typography>
      <Typography font="h2" as="h2" className="title" mt="0.6rem" mb="2rem">
        {title}
      </Typography>
      <Typography
        font="caption"
        as="p"
        mb="2.6rem"
        fontSize="1.6rem"
        color="#4D4D4D"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel
        iam, quis nostrud exercitation ullamco laboris...
      </Typography>
      <Flex justifyContent="space-between" className="card-footer">
        <Flex justifyContent="start" gap="0.6rem">
          <Typography font="smallText" as="p" className="tag" color="#4D4D4D">
            {tag1}
          </Typography>
          <Typography font="smallText" as="p" className="tag" color="#4D4D4D">
            {tag2}
          </Typography>
        </Flex>
        <Typography font="smallTextb" as="p" color="#4D4D4D">
          {time}
        </Typography>
      </Flex>
    </CardContainer>
  );
};

const BlogSection = () => {
  return (
    <BlogContainer>
      <img src={Star} alt="star" className="star" />
      <img src={Swirl} alt="swirl" className="swirl" />
      <Typography font="h1" as="h1" align="center">
        Article and News
      </Typography>
      <Typography font="h3" as="h3" align="center" mt="2rem" mb="10rem">
        News, tips, tricks and more
      </Typography>
      <Flex gap="2rem" className="grp">
        <BlogCard
          image={Image1}
          boxShadow={true}
          title="Setup your own podcast"
          subtitle="PODCAST"
          tag1="business"
          tag2="startup"
          time=" Sep 14, 2021"
        />
        <BlogCard
          image={Image2}
          tag1="art"
          title="Doodle artwork 101"
          subtitle="TIPS & TRICKS"
          tag2="creativity"
          time=" Sep 12, 2021"
        />
      </Flex>
      <Button>Browse All</Button>
      <img src={RedConnector} alt="connector" className="Redconnector" />
    </BlogContainer>
  );
};

export default BlogSection;
