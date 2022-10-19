import React from "react";
import styled from "styled-components";


export const Div_Titulo = styled.div`
display:flex;
justify-content: center;
margin-top: 30px;
margin-right: 50px;
`




export const Titulo = styled.h1`
font-family: 'Poppins';
color:#3D4EB8;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 48px;
display:flex;
justify-content: center

`


export const BlurImage = styled.h1`
filter: blur(2px);

border-radius: 0px;

`

export const ImageSize_Small = styled.img`
border-radius: 10px;
height: 30vw;
width: 20vw;
z-index:1;

`



export const ImageConteiner = styled.div`
display: flex; 
justify-content: center
`

export const ImageConteiner_Small = styled.div`
display: flex; 
border-radius: 10px;

border: 1px solid #000;

`

export const Card = styled.div`

display: flex;
flex-direction: column-reverse;
height: 30vw;
width: 20vw;
z-index:1;
margin-left: 100px;
top: 74px;
border-radius: 30px;
margin-top: 200px;
margin-right: 150px;
padding: 20px;
box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`

export const Img_background = styled.img`
display: flex;
height: 38vw;
width: 86vw;

position:absolute;
border-radius: 20px;
z-index:0;




filter: blur(4px) drop-shadow(0px 4px 4px rgba(63, 81, 181, 0.5));


` 
export const Img_Card_Bg = styled.div`
margin-top:60px;
border-radius: 20px;
position:absolute;
display: flex;
height: 38vw;
width: 86vw;
z-index:0;
filter: transparent
filter:box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 
0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`


export const Descripcion_Div = styled.div`
display:flex;
justify-content: center;
margin-top: 40px;
height: 44vw;
width: 90vw;

`
export const Descripcion = styled.h1`
font-family: 'Poppins';
display:flex;
justify-content: center;
padding:80px;

font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 48px;
display:flex;
justify-content: center

`

export const Hr= styled.div` 
height: 0.5px;
background-color:#B6BDF0;
outline:none !important;
box-shadow: #2F3CA2 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`