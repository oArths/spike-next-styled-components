'use client';

import styled from "styled-components";

export const body = styled.main`
display: flex;
flex-direction: column;
width: ${({theme}) => theme};
height: 100vh;
/* background-color: ${({theme}) => theme.colors.text}; */
`;