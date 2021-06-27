import { Star, IconProps } from 'react-feather';
import styled from 'styled-components';

const MAX_RATING = 5;

const StyledStar = styled(Star)<IconProps & { full: boolean }>`
  width: 16px;
  height: auto;
  margin-right: 2px;
  opacity: ${props => (props.full ? 1 : 0.15)};
  fill: ${props => (props.full ? ' var(--star)' : 'var(--text)')};
  stroke: none;
`;

const Rating = ({ rating }: { rating: number }): JSX.Element => (
  <div>
    {Array.from(Array(MAX_RATING).keys()).map((_, i) => (
      <StyledStar full={i < rating} key={String(i)} />
    ))}
  </div>
);

export default Rating;
