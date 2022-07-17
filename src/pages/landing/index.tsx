import styled from "styled-components";
import Header from "../../components/header";
import AboutSection from "../../components/about-section";
import Testimonials from "../../components/testimonials";
import FeaturesSection from "../../components/features";
import EpisodesSection from "../../components/episodes";
import SponsorsSection from "../../components/sponsors";
import CTASection from "../../components/cta";
import BlogSection from "../../components/blogcomponent";

const PageContainer = styled.div`
  
`;

const LandingPage = () => {
  return (
    <PageContainer>
      <Header />
      <AboutSection />
      <Testimonials />
      <FeaturesSection />
      <EpisodesSection />
      <SponsorsSection />
      <BlogSection/>
      <CTASection/>
    </PageContainer>
  );
};

export default LandingPage;
