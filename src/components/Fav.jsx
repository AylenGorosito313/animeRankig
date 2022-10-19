import React from "react";
import {Delete_Anime } from "../redux/actions"
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Delete from "./Icons/Delete_Fav";
import {
  Card,
  TituloCard,
  LinkContainerTitulo,
  Imagen,
  Hr,
  ContImagen,
  TituloContainer,
  Svg,
  TituloCardA,
  CardDelete,
  Div_gral,
} from "../components/estilos/estilo_Fav";

function Fav(props) {
  const Fav = useSelector((state) => state.animeFav);
const dispatch = useDispatch()

const handler_delete = (id)=>{
 
  dispatch(Delete_Anime(id))
}

  return (
    <>
      <Hr></Hr>
      <TituloCardA>Tus animes favoritos</TituloCardA>
      <Div_gral>
      
        {Fav?.map((fav) => {
          console.log(fav.mal_id.toString());
          return (
            <>
              <Card>
                <CardDelete >
                  <Svg onClick={()=>handler_delete(fav.mal_id)} >
                    <Delete />
                  </Svg>
                </CardDelete>
                <LinkContainerTitulo
                
                to={`/animedetail/${fav.mal_id}`}>
                  <TituloContainer>
                    <TituloCard>Tituto: {fav.title}</TituloCard>
                  </TituloContainer>
                </LinkContainerTitulo>
                <ContImagen>
                  <Imagen src={fav.images.jpg.image_url} alt="alt" />
                </ContImagen>
                {/* <p>Descripcion: {props.descripcion }</p> */}
                {/* </Container> */}
              </Card>
            </>
          );
        })}
      </Div_gral>
    </>
  );
}

export default Fav;
