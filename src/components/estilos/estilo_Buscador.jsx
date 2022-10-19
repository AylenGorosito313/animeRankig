import React from "react";
import styled from "styled-components";

export const ContainerSearch = styled.div`
margin-top: 20px;
margin-right: 10px;
justify-content: center;
  height: 30px;
  width: 700px;
  font-family: "Poppins", sans-serif;
  font-siz: 10px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  flex-direction: row-reverse;
  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }
  &:active {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  background: #d5d5f5;

  border-radius: 100px;

  flex: none;
  order: 0;
  align-self: stretch;
`;

export const Layout = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  padding: 20px;
  flex-direction: row-reverse;
  
`;

export const Btn = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;



export const Input= styled.input`
font-family: "Poppins", sans-serif;
font-siz: 30px;
margin-left: 10px;

height: 30px;
width: 600px;
border:none;
background-color:transparent;
outline:none;
&:active {
  border:none;
  outline:none;
}
`


export const Svg= styled.div`

margin-left:10px;
display: flex;
height: 30px;
width: 30px;
align-items: center;
cursor:pointer;
&:hover{
  filter: contrast(200%);
}

&:active{
  filter: contrast(100%);
}
`

export const Hr= styled.div` 
height: 0.5px;
background-color:#B6BDF0;
outline:none !important;
box-shadow: #2F3CA2 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`