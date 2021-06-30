import React from 'react';
import styled from 'styled-components';

type InputProp = {
  type?: string;
  label?: string;
  placeholder?: string;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  icon?: React.ReactNode;
  name: string;
};

const StyledInput = styled.input`
  width: 100%;
  max-width: 100%;
  padding-left: 1rem;
  font-size: 1em;
  height: 100%;
  background: transparent;
  border: none;
  transition: all 150ms ease-out;
  color: ${props => props.theme.colors.primary};
  &:hover,
  &:active,
  &:focus {
    border-color: var(--brand);
    outline: none;
    /* box-shadow: 0 0 0 4px var(--brandTinted); */
  }
`;

const InputIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 1.25em;
  width: 1.25em;
  transform: translateY(-50%);

  circle,
  line {
    opacity: 0.6;
    stroke: ${props => props.theme.colors.primary};
  }
`;
const InputContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.inputBg};
  height: 3rem;
  border-radius: 0.35rem;
`;

export function Input({ type = 'text', label, placeholder, onChange, icon, name, ...rest }: InputProp) {
  return (
    <InputContainer>
      {label ? <label>{label}</label> : null}
      <StyledInput type={type} placeholder={placeholder} onChange={onChange} name={name} {...rest} />
      {icon && <InputIcon>{icon}</InputIcon>}
    </InputContainer>
  );
}
