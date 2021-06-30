import styled from 'styled-components';

const Container = styled.div<{ size?: 'md' | 'sm' | 'xs' | 'lg' | 'xl' }>`
  max-width: ${props => props.theme.container[props.size || 'md']};
  margin: 0 auto;
  position: relative;
  @media (min-width: 480px) {
    padding: 1rem 30px;
  }
  & > main {
    margin-bottom: 50px;
    @media (min-width: 480px) {
      margin-bottom: 80px;
    }
  }
`;

export default Container;
