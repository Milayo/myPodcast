import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import NavLogo from "../../assets/images/logo.png";
import ArrowDown from "../../assets/images/Arrow - Down.png";
import Typography from "../../utils/typography";
import { Button as BaseButton } from "../../components/button/index";

const MobileNavContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 7.4rem;
  margin: 0 4rem;

  .navlogo {
    max-width: 7rem;
    height: auto;
  }

  .hamburger-container {
    position: relative;
  }
  .hamburger {
    margin: 0 auto;
    width: 30px;
    height: 30px;
    position: relative;

    .bar {
      padding: 0;
      width: 30px;
      height: 4px;
      background-color: maroon;
      display: block;
      border-radius: 4px;
      transition: all 0.4s ease-in-out;
      position: absolute;
    }
    .bar1 {
      top: 0;
      transform-origin: 5%;
    }

    .bar2 {
      top: 13.5px;
    }

    .bar3 {
      top: 13.5px;
      right: 0;
    }

    .bar4 {
      transform-origin: 5%;
      bottom: 0;
    }
  }

  .visuallyHidden {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: -1px;
    padding: 0;
    border: 0;
    opacity: 0;
  }

  .checkbox:checked + label > .hamburger > .bar1 {
    transform: rotate(45deg);
    height: 3px;
    width: 42px;
  }

  .checkbox:checked + label > .hamburger > .bar3 {
    transform: rotate(45deg);
    height: 3px;
    background-color: transparent;
  }

  .checkbox:checked + label > .hamburger > .bar2 {
    transform: rotate(-45deg);
    height: 3px;
    background-color: transparent;
  }

  .checkbox:checked + label > .hamburger > .bar4 {
    transform: rotate(-45deg);
    height: 3px;
    width: 42px;
  }
`;

const MobileNav = () => {
  return (
    <MobileNavContainer>
      <img src={NavLogo} alt="Logo" className="navlogo" />

      <div className="hamburger-container">
        <input
          type="checkbox"
          id="checkbox"
          className="checkbox visuallyHidden"
        />
        <label htmlFor="checkbox">
          <div className="hamburger">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
          </div>
        </label>
      </div>
    </MobileNavContainer>
  );
};

export default MobileNav;
