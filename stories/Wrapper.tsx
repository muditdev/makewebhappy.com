import styled from 'styled-components';

const StyledWrapper = styled.div<{ padding?: number }>`
  background-color: ${props => props.theme.colors.bg};
  padding: ${props => props.padding * 10 || 100}px;
  border-radius: 30px;
  font-family: ${props => props.theme.primaryFont};
`;

export default StyledWrapper;
