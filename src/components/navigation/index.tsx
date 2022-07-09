import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import NavLogo from "../../assets/images/logo.png";
import ArrowDown from "../../assets/images/Arrow - Down.png";
import Typography from "../../utils/typography";
import { Button as BaseButton } from "../../components/button/index";

const NavContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 7.4rem;
  margin: 0 14rem;
`;

const Button = styled(BaseButton)`
  padding: 12px 24px;
  background: ${({ background, theme }) =>
    background === "dark" && theme.colors.black};
  color: ${({ color }) => color === "white" && "white"};
  box-shadow: ${({ boxShadow }) =>
  boxShadow === "true" && "3px 3px 0px rgba(0, 0, 0, 0.25)"};
`;

const Navigation = () => {
  return (
    <NavContainer>
      <img src={NavLogo} alt="Logo" />
      <Flex>
        <Typography font="bodyTextb" as="p">
          Episodes
        </Typography>
        <Typography font="bodyTextb" as="p" mx="6rem">
          About
        </Typography>
        <Flex gap="0.4rem">
          <Typography font="bodyTextb" as="p">
            More
          </Typography>
          <img src={ArrowDown} />
        </Flex>
      </Flex>
      <Flex gap="2rem">
        <Button>Recent Episodes</Button>
        <Button background="dark" color="white" boxShadow="true">
          Subscribe
        </Button>
      </Flex>
    </NavContainer>
  );
};

export default Navigation;
