import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr minmax(300px, 1fr);
  column-gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;
export const Col = styled.div`
  width: 100%;
`;
