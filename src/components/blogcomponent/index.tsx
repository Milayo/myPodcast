import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import { Button as BaseButton } from "../../components/button/index";
import BlackConnector from "../../assets/images/BlackConnector.png";
import Image1 from "../../assets/images/blog-image1.png";
import Image2 from "../../assets/images/blog-image2.png";
import { shadow } from "styled-system";

interface BlogCardProps {
  image: any;
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
  margin-top: 10rem;
`;

const BlogContainer = styled.div`
  padding: 14rem;
`;

const CardContainer = styled.div<{ boxShadow?: boolean }>`
  padding: 1.6rem;
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: ${({ boxShadow }) =>
    boxShadow === true && "10px 10px 0px #000000"};
  border-radius: 8px;

  .title {
      color: ${({ boxShadow }) =>
    boxShadow === true && "#CD4631"};
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

const BlogCard = ({ image, boxShadow, tag1, tag2, time }: BlogCardProps) => {
  return (
    <CardContainer boxShadow={boxShadow}>
      <img src={image} alt="Image" className="Image" />
      <Typography
        font="captionb"
        as="p"
        mt="4rem"
        fontSize="1.6rem"
        color="#4D4D4D"
      >
        PODCAST
      </Typography>
      <Typography font="h2" as="h2" className="title" mt="0.6rem" mb="2rem">
        Setup your own podcast
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
          <Typography font="smallText" as="p" className="tag">
            {tag1}
          </Typography>
          <Typography font="smallText" as="p" className="tag">
           {tag2}
          </Typography>
        </Flex>
        <Typography font="smallTextb" as="p">
         {time}
        </Typography>
      </Flex>
    </CardContainer>
  );
};

const BlogSection = () => {
  return (
    <BlogContainer>
      <Typography font="h1" as="h1" align="center">
        Article and News
      </Typography>
      <Typography font="h3" as="h3" align="center" mt="2rem" mb="10rem">
        News, tips, tricks and more
      </Typography>
      <Flex gap="2rem">
        <BlogCard
          image={Image1}
          boxShadow={true}
          tag1="business"
          tag2="startup"
          time=" Sep 14, 2021"
        />
        <BlogCard
          image={Image2}
          tag1="art"
          tag2="creativity"
          time=" Sep 12, 2021"
        />
      </Flex>
      <Button>Browse All</Button>
    </BlogContainer>
  );
};

export default BlogSection;
