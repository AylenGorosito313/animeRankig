import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"

export const LinkContainer= styled(Link)`
color:#3D4EB8;
 font-size: 20px;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: blue;
}
&:active{
    color: red;
};

`
export const LinkContainerTitulo = styled(Link)`
color:#000;
 font-size: x-large;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: blue;
}
&:active{
    color: red;
};

`


export const Svg= styled.div`
display: flex;
margin-left:10px;
display: flex;
height: 50px;
width: 50px;
border-radius: 50%;
align-items: center;
cursor:pointer;
color: #F00073;




&:hover{
  filter: contrast(200%);

}

&:active{
  filter: contrast(100%);
  animation:  heartback 1s ease-in-out infinite;
}
@keyframes heartback{
  0%,100%{
    opacity: 0.2;
    transform:  scale(1);
  }
  50%{
    opacity: 0.2;
    transform:  scale(2);
  }
}
@keyframes heart{
  0%,100%{
    transform:  scale(1);
  }
  50%{
    transform:  scale(1.2);
  }
}
}
`


export const Estilo = styled.div`
outline:none;
justify-content: space-around;
align-items: center;
font-family: 'Poppins', sans-serif;
background: #fff;
height: 80px;
display: flex;
position:sticky;
padding: 20px;
`
export const Logo =styled.div`
display: flex;
align-items: left;
width: 300px;
height:50px;
margin-right: 10px;
padding: 20px;

justify-content: flex-start;
align-items: flex-end;


`
export const Logo2 =styled.div`
margin-top: 30px;


`


export const A= styled.div`
outline:none  !important;
align-items: center !important;
padding: 1rem !important;
font-size: 1.2rem !important;
color: #3F51B5 !important;
margin-right: 10px !important;
margin-top: 10px !important;
flex-wrap: wrap !important;

`

export const ConteinerCard = styled.div`
display:flex;
width: 1500px;
height: 1275px;
left: 93px;
top: 1431px; 
flex-wrap: wrap;
justify-content: center;
margin-left:60px;
`
export const Card = styled.div`
display: flex;
flex-direction: column-reverse;

height: 450px;
width: 300px;;
margin-left: 100px;
top: 74px;
border-radius: 30px;
margin-top: 100px;
padding: 20px;



box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`
export const TituloContainer = styled.div`

display: flex;
justify-content: center;

`
export const TituloCard = styled.h1`
color: #3F51B5;
font-family: 'Poppins', sans-serif;
font-size: 15px;
justify-content: center;
text-overflow: ellipsis;

`

export const Imagen= styled.img`


border-radius:20px;
align-item: center;

`
export const ContImagen= styled.div`
display: flex;
justify-content: center;

align-item: center;

`

export const Layout= styled.div`
displey:flex;
align-item: center;

`



export const CardHear = styled.div`
display: flex;
height: 50px;
width: 50px;;
top: 74px;
border-radius: 50%;

box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`



