import { ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px 12px;
  color: var(--text);
  font-size: 17px;
  font-family: var(--fontFamily);
  background-color: var(--bg);
  background-color: var(--inputBg);
  border: 1px solid var(--border);
  border-radius: 6px;
  -webkit-appearance: none;
`;

type InputProps = {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // eslint-disable-line
  className?: string;
};

const Input = ({ type = 'text', placeholder, disabled, value, onChange, className }: InputProps): JSX.Element => (
  <StyledInput value={value} type={type} placeholder={placeholder} className={className} disabled={disabled} onChange={onChange} />
);

export default Input;
