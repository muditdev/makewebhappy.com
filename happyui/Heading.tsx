import React from 'react';

import styled, { css } from 'styled-components';

const variants = {
  1: css`
    font-size: 2.5rem;
  `,
  2: css`
    font-size: 2rem;
  `,
  3: css`
    font-size: 1rem;
  `,
};

type Props = {
  level: 1 | 2 | 3 | 4;
  as?: any;
  children: React.ReactNode;
  align?: string;
};
// eslint-disable-next-line react/prop-types
const HeadingBase = ({ level, as: Component = `h${level}`, ...props }: Props) => <Component {...props} />;

const Heading = styled(HeadingBase)<Props>`
  margin: 0;
  text-align: ${props => props.align || 'center'};
  /* padding:; */
  font-weight: 600;
  ${props => variants[props.level]}
`;

export default Heading;
