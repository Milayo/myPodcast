import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import NavLogo from "../../assets/images/logo.png";
import TwitterLogo from "../../assets/images/twitter.png";
import TikTokLogo from "../../assets/images/tiktok.png";
import InstagramLogo from "../../assets/images/instagram.png";
import GooglePodcast from "../../assets/images/Footer-Google Podcast.png";
import YouTube from "../../assets/images/Footer-Youtube.png";
import Spotify from "../../assets/images/Footer-Spotify.png";
import AppStore from "../../assets/images/Footer-AppStore.png";
import GooglePlay from "../../assets/images/google_play.svg";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const FooterSectionContainer = styled.div`
  .container {
    border-top: 1.5px solid #4d4d4d;
    padding: 14rem;
    padding-bottom: 0;
    justify-content: space-between;
    align-items: start;
    
    ${mediaQueries.tabport} {
      padding: 14rem 12rem;
      flex-wrap: wrap;
      row-gap: 5rem;
    }

    ${mediaQueries.phone} {
      padding: 14rem 5rem;
    }

    @media screen and (max-width: 400px) {
      padding: 14rem 3rem;
    }
  }

  .logo {
    max-width: 6rem;
  }

  .footer-text {
    width: 27.5rem;
    margin-bottom: 4rem;
    @media screen and (max-width: 400px) {
      width: 18rem;
    }
  }

  .footnote {
    border-top: 0.5px solid #4d4d4d;
    padding: 2rem 0 8rem;
    margin: 13.7rem 14rem 0 14rem;

    ${mediaQueries.tabport} {
      margin: 13.7rem 12rem 0 12rem;
    }
    ${mediaQueries.phone} {
      margin: 13.7rem 5rem 0 5rem;
    }

    @media screen and (max-width: 400px) {
      margin: 13.7rem 2rem 0 3rem;
    }
  }

  .googlepodcast {
    max-width: 12rem;
    ${mediaQueries.phone} {
      max-width: 10rem;
    }
  }

  .spotify {
    max-width: 8rem;
    ${mediaQueries.phone} {
      max-width: 6rem;
    }
  }

  .youtube {
    max-width: 9rem;
    ${mediaQueries.phone} {
      max-width: 7rem;
    }
  }
`;

const FooterSection = () => {
  return (
    <FooterSectionContainer>
      <Flex className="container">
        <Flex direction="column" gap="4rem" alignItems="start">
          <Flex justifyContent="start" gap="2.5rem" alignItems="end">
            <img src={NavLogo} alt="Logo" className="logo" />
            <Typography font="smallText" as="p" color="#4D4D4D">
              ©2021.
            </Typography>
          </Flex>

          <Typography
            font="caption"
            as="p"
            className="footer-text"
            color="#4D4D4D"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>

          <Flex justifyContent="space-between" width="12.2rem">
            <img src={TwitterLogo} alt="twitter" />
            <img src={InstagramLogo} alt="instagram" />
            <img src={TikTokLogo} alt="tiktok" />
          </Flex>
        </Flex>

        <Flex direction="column" gap="2rem" alignItems="start">
          <Typography font="bodyText" as="p">
            About
          </Typography>
          <Typography font="bodyText" as="p" color="#CD4631">
            Testimonials
          </Typography>
          <Typography font="bodyText" as="p">
            Features
          </Typography>
        </Flex>
        <Flex direction="column" gap="2rem" alignItems="start">
          <Typography font="bodyText" as="p" color="#CD4631">
            Episodes
          </Typography>
          <Typography font="bodyText" as="p">
            Pricing
          </Typography>
          <Typography font="bodyText" as="p">
            Blog
          </Typography>
        </Flex>
        <Flex>
          <Flex direction="column" alignItems="start" className="platforms">
            <>
              <Typography font="bodyText" as="p" color="#4D4D4D">
                Listen to episodes on your fav platform:
              </Typography>
              <Flex gap="3.85rem" mt="2.9rem">
                <img
                  src={GooglePodcast}
                  alt="googlepodcast"
                  className="googlepodcast"
                />
                <img src={Spotify} alt="spotify" className="spotify" />
                <img src={YouTube} alt="youtube" className="youtube" />
              </Flex>
            </>
            <Typography font="bodyText" as="p" mt="6rem" color="#4D4D4D">
              App available on:
            </Typography>
            <Flex justifyContent="start" mt="2rem" gap="2rem">
              <img src={AppStore} alt="AppStore" />
              <img src={GooglePlay} alt="GooglePlay" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" className="footnote">
        <Typography font="smallText" as="p" color="#4D4D4D">
          ©2022. All Rights Reserved.
          <Typography font="smallText" as="span" color="#CD4631">
            {" "}
            Pod of Cast
          </Typography>
        </Typography>
        <Typography font="smallText" as="p" color="#4D4D4D">
          Terms • Privacy
        </Typography>
      </Flex>
    </FooterSectionContainer>
  );
};

export default FooterSection;
