import styled from "styled-components";
import Header from "../../components/header";
import AboutSection from "../../components/about-section";
import RedConnector from "../../assets/images/RedConnector.png";

const PageContainer = styled.div`
  .connector {
   left: 50%;
   top: 139rem;
    position: absolute;
  }
`;
const LandingPage = () => {
  return (
    <PageContainer>
      <Header />
      <img src={RedConnector} alt="" className="connector" />
      <AboutSection />
    </PageContainer>
  );
};

export default LandingPage;
