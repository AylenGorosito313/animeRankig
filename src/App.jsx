import Home from "./components/home";
import Rank from "./components/Ranking";
import Nav from "./components/Nav";
import AnimeDetail from "./components/AnimeDetail";

import Fav from "./components/Fav";
import styled from "styled-components";





import { Route} from "react-router-dom";

function App() {
  return (
    <>
      <Route  path="/">
        <Nav />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/rank">
        <Rank/>
      </Route>
      <Route exact path="/fav">
        <Fav />
      </Route>

      <Route exact path="/animedetail/:id">
      <AnimeDetail/>
      </Route>

   
    </>
  );
}

export default App;
