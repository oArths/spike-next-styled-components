'use client';

import styled from "styled-components";

export const body = styled.main`
display: flex;
flex-direction: column;
width: ${({ theme }) => {
    console.log(theme); // Verifique o tema
    return theme.sizes.m;
  }};
height: 100vh;
/* background-color: ${({theme}) => theme.colors.text}; */
`;