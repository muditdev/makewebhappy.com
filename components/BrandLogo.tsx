import React from 'react';
import Logo from 'assets/logo.svg';
import styled from 'styled-components';

const StyledLogo = styled(Logo)`
  fill: ${props => props.theme.colors.primary};
  width: 2.25rem;
  height: auto;
`;

function BrandLogo() {
  return <StyledLogo />;
}

export default BrandLogo;
