'use client';
import styled from "styled-components";
import Link from "next/link";
export const main = styled.main`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 40px;
width: 100vw;
height: 60px;
`;
export const op = styled(Link)`
text-decoration: none;
font-size: 20px;
color: white;
font-weight: 700;

`;