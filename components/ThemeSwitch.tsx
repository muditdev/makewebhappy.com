/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';

const variants = ['light', 'dark'];

const Wrapper = styled.div`
  position: relative;
  display: none;
  width: 51px;
  height: 51px;
  margin-right: -3px;

  @media (min-width: 480px) {
    display: block;
  }
`;

const ThemeSwitch = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <Wrapper />; // skeleton on server

  return (
    <AnimateSharedLayout>
      <Wrapper>
        {variants.map(
          variant =>
            variant !== theme && (
              <span key={variant} onClick={() => setTheme(variant)} style={{ cursor: 'pointer' }}>
                {variant}
              </span>
            ),
        )}
      </Wrapper>
    </AnimateSharedLayout>
  );
};

export default ThemeSwitch;
