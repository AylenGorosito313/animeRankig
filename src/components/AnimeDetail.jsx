import styled from "styled-components";
import React from "react";
import Episodies from "./Episodies"
import {
  Titulo,
  Img_background,
  Card,
  Hr,
  Div_Titulo,
  ImageConteiner,
  ImageSize_Small,
  ImageConteiner_Small,
  Img_Card_Bg,
  Descripcion_Div,
  Descripcion,
} from "../components/estilos/estilo_Detail";
import { useDispatch, useSelector } from "react-redux";
import { getDetailAnimes, cleanDetail } from "../redux/actions";
import { useParams } from "react-router-dom";

function AnimeDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const animeDetail = useSelector((state) => state.animeDetail);

  React.useEffect(() => {
    dispatch(getDetailAnimes(id));

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  React.useEffect(() => {
    console.log(animeDetail);
  }, [animeDetail]);

  return (
    <>

    <Hr></Hr>
      <ImageConteiner>
        <Card>
          <ImageConteiner_Small>
            {animeDetail.hasOwnProperty("images") && (
              <ImageSize_Small
                src={animeDetail.images.jpg.large_image_url}
                alt="poster"
              />
            )}
          </ImageConteiner_Small>
        </Card>
        <Img_Card_Bg>
          {animeDetail.hasOwnProperty("images") && (
            <Img_background
              src={animeDetail.images.jpg.large_image_url}
              alt="poster"
            />
          )}
        </Img_Card_Bg>
      </ImageConteiner>

      <Div_Titulo>
        <Titulo> {animeDetail.title}</Titulo>
      </Div_Titulo>

     
      <Hr></Hr>

        <Descripcion> {animeDetail.synopsis}</Descripcion>
 
        <Hr></Hr>
     
      
    </>
  );
}

export default AnimeDetail;
