import styled from "styled-components";
import Header from "../../components/header";


const PageContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.champagne};
    padding: 2.4rem 14rem 0 14rem;
`
const LandingPage = () => {
  return (
    <PageContainer>
      <Header />
    </PageContainer>
  );
};

export default LandingPage;
