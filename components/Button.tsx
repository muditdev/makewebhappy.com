import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  color: var(--brand);
  font-weight: 700;
  font-size: 16px;
  font-family: var(--fontFamily);
  background-color: var(--brandTinted);
  border: none;
  border-radius: 9999px;
  transition: background-color 200ms ease-out, color 200ms ease-out;

  &:hover,
  &:focus {
    background-color: var(--brandTintedActive);
    cursor: pointer;
  }

  svg {
    width: 18px;
    margin-left: 8px;
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  .transparent {
    padding: 0;
    color: var(--brand);
    font-weight: 500;
    background-color: transparent;

    &:hover,
    &:focus {
      color: var(--brandActive);
      background-color: transparent;
      cursor: pointer;
    }
  }

  .like {
    margin-bottom: 50px;
    padding: 14px 60px;
    color: var(--text);
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    background-color: var(--likeButton);
    border-radius: 30px;
    transition: transform 200ms ease-out, background-color 200ms ease-out;

    &:hover,
    &:focus {
      background-color: var(--likeButtonHover);
      transform: scale(1.03);
    }

    &[disabled] {
      opacity: 1;
    }

    svg {
      width: 20px;
      margin-right: 10px;
      margin-left: 0;
    }
  }
`;

type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  onClick?: () => void;
  variant?: 'transparent' | 'like';
  disabled?: boolean;
};

const Button = ({ children, type, href, variant, onClick, disabled }: ButtonProps): JSX.Element => {
  if (onClick || !href) {
    return (
      <StyledButton className={variant || ''} type={type === 'submit' ? 'submit' : 'button'} onClick={onClick} disabled={disabled}>
        {children}
      </StyledButton>
    );
  }
  if (href.startsWith('/')) {
    return (
      <Link href={href} passHref>
        <a>
          <StyledButton className={variant || ''} type={type === 'submit' ? 'submit' : 'button'} disabled={disabled}>
            {children}
          </StyledButton>
        </a>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={variant || ''}>
      {children}
    </a>
  );
};

export default Button;
