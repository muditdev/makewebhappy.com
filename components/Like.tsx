import { useEffect, useState } from 'react';
import { Heart, IconProps } from 'react-feather';
import styled, { css } from 'styled-components';

import Button from 'components/Button';
import { safeLocalStorage as localStorage } from 'lib/localstorage';

interface HeartIconProps {
  readonly isactive: string;
}

const StyledIcon = styled(Heart)<HeartIconProps & IconProps>`
  ${props =>
    props.isactive === 'true' &&
    css`
      transform-origin: center bottom;
      transition: fill 200ms ease-out, stroke 200ms ease-out;
      /* animation-name: bounce;
	animation-duration: 1s;
	animation-fill-mode: both; */
      fill: var(--brand);
      stroke: var(--brand);
    `}
`;

const LikeButton = (): JSX.Element | null => {
  const [likes, setLikes] = useState<number>(() => {
    const getLikes = localStorage.getItem('likes');
    if (getLikes) return Number(getLikes);
    return 0;
  });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    localStorage.setItem('likes', likes.toString());
  }, [likes]);

  const onLike = async () => {
    setLikes(prev => prev + 1);
  };

  if (!mounted) return null;

  return (
    <Button onClick={onLike} type="button" variant="like">
      <>
        <StyledIcon isactive={(likes > 0).toString()} /> &nbsp; {likes}
      </>
    </Button>
  );
};

export default LikeButton;
