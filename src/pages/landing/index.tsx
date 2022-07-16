import styled from "styled-components";
import Header from "../../components/header";
import AboutSection from "../../components/about-section";
import Testimonials from "../../components/testimonials";
import FeaturesSection from "../../components/features";
import EpisodesSection from "../../components/episodes";

const PageContainer = styled.div`
  
`;

const LandingPage = () => {
  return (
    <PageContainer>
      <Header />
      <AboutSection />
      <Testimonials />
      <FeaturesSection />
      <EpisodesSection/>
    </PageContainer>
  );
};

export default LandingPage;
