/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styled from 'styled-components';

const variants = ['light', 'dark'];

const Wrapper = styled.div`
  padding: ${props => props.theme.padding.md};
  font-size: ${props => props.theme.fontsize.md};
`;

const ThemeSwitch = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <Wrapper />; // skeleton on server

  return (
    <Wrapper>
      {variants.map(
        variant =>
          variant !== theme && (
            <span key={variant} onClick={() => setTheme(variant)}>
              {variant}
            </span>
          ),
      )}
    </Wrapper>
  );
};

export default ThemeSwitch;
