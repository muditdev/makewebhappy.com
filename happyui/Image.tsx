import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
  fit?: 'contain' | 'cover';
}

const StyledImage = styled.img<Props>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
// src={src} alt={alt} width={2024} height={1012} layout="responsive"

export const Image = ({ src, alt, fit = 'cover' }: Props) => {
  return <StyledImage alt={alt} src={src} fit={fit} />;
};
