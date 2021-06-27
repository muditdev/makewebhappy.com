import styled from 'styled-components';

const StyledWrapper = styled.div<{ isCompact: boolean }>`
  margin-bottom: ${({ isCompact }) => (isCompact ? '30px' : '50px')};
  @media (min-width: 480px) {
    margin-bottom: ${({ isCompact }) => (isCompact ? '40px' : '90px')};
  }
`;
const Title = styled.h1`
  margin-bottom: 12px;
  font-weight: 800;
  font-size: 30px;
  letter-spacing: -0.3px;

  @media (min-width: 480px) {
    margin-bottom: 15px;
    font-size: 38px;
  }
`;
const Description = styled.p`
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.5;
  opacity: 0.8;

  @media (min-width: 480px) {
    font-size: 19px;
  }
`;

type PageHeaderProps = {
  title: string | JSX.Element;
  description?: string | JSX.Element;
  children?: JSX.Element;
  compact?: boolean;
};
const PageHeader = ({ title, description, children, compact }: PageHeaderProps): JSX.Element => (
  <StyledWrapper isCompact={compact}>
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}
    {children}
  </StyledWrapper>
);

export default PageHeader;
