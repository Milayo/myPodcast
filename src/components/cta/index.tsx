import styled from "styled-components";
import Typography from "../../utils/typography";
import Flex from "../../utils/flex/flex";
import BlackConnector from "../../assets/images/BlackConnector.png";

const CTAContainer = styled.div`
  background: ${({ theme }) => theme.colors.lighterBlue};
`;

const CTASection = () => {
  return <CTAContainer>CTASection</CTAContainer>;
};

export default CTASection;
