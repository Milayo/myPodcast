import Navigation from "../navigation";
import styled from "styled-components";
import Typography from "../../utils/typography";
import { Button as SubScribeButton } from "../../components/button/index";
import Flex from "../../utils/flex/flex";
import Swirl from "../../assets/images/Hero-Swirl.svg";
import Stars from "../../assets/images/Hero-Star.png";
import RedConnector from "../../assets/images/RedConnector.png";
import CoverCards from "../cover-cards/cover-cards";
import Platform from "../platform";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.champagne};
  padding-top: 2.4rem;
  padding-bottom: 14rem;
  position: relative;

  @media screen and (max-width: 400px) {
    padding-bottom: 6rem;
  }

  .redconnector {
    left: 50%;
    top: 139rem;
    position: absolute;

    ${mediaQueries.tabport} {
      top: 131rem;
    }

    ${mediaQueries.phone} {
      top: 125rem;
    }

    @media screen and (max-width: 500px) {
      top: 132.5rem;
    }

    @media screen and (max-width: 400px) {
      top: 142rem;
    }
  }
`;

const ContentContainer = styled(Flex)`
  .maintitle {
    letter-spacing: -0.04em;
  }
  .swirl {
    top: 7rem;
    left: 0;
    max-width: 60rem;
    height: auto;
    position: absolute;
    z-index: 1;

    ${mediaQueries.tabport} {
      max-width: 30rem;
      height: auto;
      top: 15rem;
    }

    ${mediaQueries.phone} {
      top: 22rem;
    }
  }

  .middle-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6.4rem;
    z-index: 2;

    .title {
      width: max-content;
      height: auto;
      margin-bottom: 4rem;

      ${mediaQueries.phone} {
        margin-bottom: 2rem;
      }

      span {
        color: ${({ theme }) => theme.colors.red};
      }
    }

    .subtitle {
      margin-bottom: 6rem;

      ${mediaQueries.phone} {
        margin-bottom: 20rem;
      }

      @media screen and (max-width: 500px) {
        margin-bottom: 28rem;
      }
    }
  }

  .stars {
    position: absolute;
    right: 5.97rem;
    top: 23.5rem;
    max-width: 14rem;
    height: auto;

    ${mediaQueries.tabport} {
      max-width: 12rem;
      right: 2rem;
    }

    ${mediaQueries.phone} {
      max-width: 10rem;
      top: 30rem;
    }
  }
`;

const Button = styled(SubScribeButton)`
  padding: 24px 48px;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25);
  width: max-content;
  margin-bottom: 12rem;

  ${mediaQueries.tabport} {
    padding: 20px 38px;
  }

  ${mediaQueries.phone} {
    padding: 15px 28px;
    margin-bottom: 10rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <ContentContainer justifyContent="space-evenly">
        <img src={Swirl} alt="" className="swirl" />
        <div className="middle-content">
          <div className="title">
            <Typography
              font="title"
              as="h1"
              align="center"
              className="maintitle"
            >
              Your Daily
              <br /> <span>Podcast</span>
            </Typography>
          </div>

          <div className="subtitle">
            <Typography font="bodyText" as="h2" align="center" color="#4D4D4D">
              We cover all kinds of categories
              <br />
              and a weekly special guest.
            </Typography>
          </div>
          <Button>Subscribe</Button>
        </div>
        <img src={Stars} alt="stars" className="stars" />
      </ContentContainer>
      <CoverCards />
      <Platform />
      <img src={RedConnector} alt="connector" className="redconnector" />
    </HeaderContainer>
  );
};

export default Header;
