import React, { useEffect } from "react";
import { ConteinerCard } from "../components/estilos/estilo";
import Buscador from "./buscador";
import { getAllAnimes } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import AnimeCard from "./animeCard";

function Home() {
  const animes = useSelector((state) => state.animes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnimes(""));
  },[]);



  return (
    <>
      <div>
        <Buscador />
      </div>

      <ConteinerCard>
        {animes?.map((anime) => (
          <AnimeCard
            name={anime.title}
            descripcion={anime.synopsis}
            id={anime.mal_id}
            image={anime.images.jpg.image_url}
          />
        ))}
      </ConteinerCard>
    </>
  );
}

export default Home;
