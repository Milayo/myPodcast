import Navigation from "../navigation";
import styled from "styled-components";
import Typography from "../../utils/typography";
import { Button as SubScribeButton } from "../../components/button/index";
import Flex from "../../utils/flex/flex";
import Swirl from "../../assets/images/Hero-Swirl.svg";
import Stars from "../../assets/images/Hero-Star.png";
import CoverCards from "../cover-cards/cover-cards";
import Platform from "../platform";

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.champagne};
  padding-top: 2.4rem;
  padding-bottom: 14rem;
  position: relative;
`;

const ContentContainer = styled(Flex)`
  .dd {
    letter-spacing: -0.04em;
  }
  .swirl {
    top: 7rem;
    left: 0;
    max-width: 62.957rem;
    height: auto;
    position: absolute;
    z-index: 1;
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
      span {
        color: ${({ theme }) => theme.colors.red};
      }
    }

    .subtitle {
      margin-bottom: 6rem;
    }
  }

  .stars {
    position: absolute;
    right: 5.97rem;
    top: 23.5rem;
    max-width: 15.53rem;
    height: auto;
  }
`;

const Button = styled(SubScribeButton)`
  padding: 24px 48px;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25);
  width: max-content;
  margin-bottom: 12rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <ContentContainer justifyContent="space-evenly">
        <img src={Swirl} alt="" className="swirl" />
        <div className="middle-content">
          <div className="title">
            <Typography font="title" as="h1" align="center" className="dd">
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
    </HeaderContainer>
  );
};

export default Header;
