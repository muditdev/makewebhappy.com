// import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  onClick?: () => void;
  variant?: 'transparent' | 'rounded';
  disabled?: boolean;
  loading?: boolean;
  //   icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
};

const BTN_THEME = {
  primary: {
    color: 'buttonText',
  },
  secondary: {
    color: 'primary',
  },
};

const MyButton = styled.button<ButtonProps>`
  /* reset button defaults */
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;
  /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
  line-height: normal;
  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  /* Corrects inability to style clickable input types in iOS */
  -webkit-appearance: none;

  background-color: ${props => (props.variant === 'transparent' ? 'transparent' : props.theme.colors[props.color])};
  color: ${props => (props.variant === 'transparent' ? props.theme.colors.primary : props.theme.colors[BTN_THEME[props.color].color])};
  font-family: ${props => props.theme.primaryFont};
  padding: 0 ${props => props.theme.padding[props.size]};
  cursor: pointer;
  border-radius: ${props => (props.variant === 'rounded' ? '5rem' : props.theme.radius[props.size])};

  font-size: ${props => props.theme.fontsize[props.size]};
  font-weight: 600;
  min-width: ${props => {
    switch (props.size) {
      case 'sm':
        return 5;
      case 'lg':
        return 7;
      default:
        return 6;
    }
  }}rem;
  min-height: ${props => {
    switch (props.size) {
      case 'sm':
        return 2;
      case 'lg':
        return 3.25;
      default:
        return 2.5;
    }
  }}rem;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      pointer-events: none;
    `}
`;

export function Button({ children, size = 'md', color = 'primary', ...rest }: ButtonProps) {
  return (
    <MyButton size={size} color={color} {...rest}>
      {children}
    </MyButton>
  );
}
