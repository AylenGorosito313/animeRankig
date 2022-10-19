import React, { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Heart from "./Icons/Heart"
import {
  CardHear ,
  TituloContainer,
  LinkContainerTitulo ,
  Card,
  Imagen,
  TituloCard,
  ContImagen,
  Svg
} from "../components/estilos/estilo";
import { useDispatch } from "react-redux";
import {Add_Fav_Anime} from "../redux/actions"



function AnimeCard(props) {
const dispatch = useDispatch()

  const handler_Fav = ()=>{
    console.log(props.id)
    dispatch(Add_Fav_Anime(props.id))
  }


  return (
   
    <>
      <Card>
     

        <CardHear onClick={handler_Fav}><Svg><Heart/></Svg></CardHear>
        
      
        <LinkContainerTitulo to={`/animedetail/${props.id}`}>
          <TituloContainer>
            <TituloCard>Tituto: {props.name}</TituloCard>
          </TituloContainer>
        </LinkContainerTitulo >
        <ContImagen>
          <Imagen src={props.image} alt="alt" />
        </ContImagen>
        {/* <p>Descripcion: {props.descripcion }</p> */}
        {/* </Container> */}
      </Card>
    </>
  );
}

export default AnimeCard;

// height: 300px;
// width: 200px;
