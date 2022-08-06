import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import NavLogo from "../../assets/images/logo.png";
import ArrowDown from "../../assets/images/Arrow - Down.png";
import Typography from "../../utils/typography";
import { Button as BaseButton } from "../../components/button/index";
import { mediaQueries, devices } from "../../utils/themes/mediaQueries";
import useMediaQuery from "../../utils/useMediaQueries";
import MobileNav from "./mobilenav";

const NavContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 7.4rem;
  margin: 0 14rem;

  ${mediaQueries.tabland} {
    margin: 0 8rem;
  }

  ${mediaQueries.tabport} {
    margin: 0 4rem;
  }

  .navlogo {
    max-width: 7.4rem;
    height: auto;
  }

  .middlenav {
    margin: 0 6rem;

    ${mediaQueries.tabport} {
      margin: 0 3.5rem;
    }
  }
`;

const Button = styled(BaseButton)`
  padding: 12px 24px;
  background: ${({ background, theme }) =>
    background === "dark" && theme.colors.black};
  color: ${({ color }) => color === "white" && "white"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow === "true" && "3px 3px 0px rgba(0, 0, 0, 0.25)"};

  ${mediaQueries.tabport} {
    padding: 8px 11px;
  }
`;

const Navigation = () => {
  const isMobile = useMediaQuery(devices.phone);
  return (
    <>
      {isMobile ? (
        <MobileNav />
      ) : (
        <NavContainer>
          <img src={NavLogo} alt="Logo" className="navlogo" />
          <Flex>
            <Typography font="bodyTextb" as="p">
              Episodes
            </Typography>
            <Typography font="bodyTextb" as="p" className="middlenav">
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
      )}
    </>
  );
};

export default Navigation;
