import { ReactNode } from 'react';
import { AlertTriangle, Info } from 'react-feather';
import styled from 'styled-components';

const WarningWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 15px;
  overflow-x: auto;
  font-weight: 500;
  font-size: 1rem;
  background-color: var(--boxBg);
  border-radius: 5px;

  @media (min-width: 480px) {
    padding: 16px 20px;
    font-size: 1rem;
  }

  svg {
    flex: 0 0 20px;
    width: 20px;
    margin-top: 6px;
    margin-right: 10px;

    @media (min-width: 480px) {
      flex: 0 0 30px;
      width: 30px;
      margin-top: 10px;
      margin-right: 15px;
    }
  }

  path,
  line,
  circle {
    stroke: var(--brand);
  }

  p.text {
    margin: 0;

    pre {
      max-width: 75vw;
      margin: 1em 0 0.5em 0;
    }
  }
`;

const WarningAlert = ({ children, type }: { children: ReactNode; type: 'warning' | 'info' }): JSX.Element => (
  <WarningWrapper>
    {type === 'info' ? <Info /> : <AlertTriangle />}
    <p className="text">{children}</p>
  </WarningWrapper>
);

export default WarningAlert;
