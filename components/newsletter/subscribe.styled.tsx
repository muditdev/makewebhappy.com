import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  background-color: var(--boxBg);
  border-radius: 6px;

  @media (min-width: 480px) {
    padding: 25px;
  }
  .hidden {
    input,
    button {
      opacity: 0;
    }

    .message {
      opacity: 1;
    }
  }
  .em {
    font-weight: 500;
    white-space: nowrap;
    background: -webkit-linear-gradient(-45deg, var(--brand), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Header = styled.header`
  display: flex;

  svg {
    flex: 0 0 18px;
    width: 18px;
    margin-right: 10px;

    @media (min-width: 480px) {
      flex: 0 0 22px;
      width: 22px;
    }
  }
`;
export const Title = styled.h4`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;

  @media (min-width: 480px) {
    font-size: 22px;
  }
`;
export const Input = styled.input`
  width: 100%;
  margin-right: 12px;
  padding: 12px 14px;
  color: var(--text);
  font-weight: 600;
  font-size: 16px;
  background-color: var(--inputBg);
  border: none;
  border-radius: 6px;
  -webkit-appearance: none;
`;
export const Description = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 1.4;
  opacity: 0.8;

  @media (min-width: 480px) {
    font-size: 18px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  input,
  button {
    transition: opacity 300ms ease-out;
  }
`;
export const Message = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  font-weight: 700;
  font-size: 18px;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 300ms ease-out;
`;
