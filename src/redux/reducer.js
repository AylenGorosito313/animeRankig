import {
  GET_ANIMES,
  GET_ANIMES_DETAIL,
  ADD_ANIME_FAV,
  DELETE_ANIME,
  CLEAN_DETAIL,
  RANKING_ANIME,
  GET_EPISODIES
} from "./actions-type";

const initialState = {
  animes: [],
  animeDetail: {},
  animeFav: [],
  animeRank: [],
  episodies: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMES:
      return {
        ...state,
        animes: [...action.payload.data],
      };
    case GET_ANIMES_DETAIL:
      return {
        ...state,
        animeDetail: action.payload.data,
      };



      

    case ADD_ANIME_FAV:
 
    return {
        ...state,
        animeFav: [...state.animeFav,...state.animes.filter((anime) => action.payload == anime.mal_id )]
      };





    case DELETE_ANIME:
   
      return {
        ...state,
        animeFav: state.animeFav.filter((anime) => anime.mal_id !== action.payload)
      };

      case RANKING_ANIME:
     
      return {
        
        ...state,
        animeRank: [...action.payload.data],
      };

      case GET_EPISODIES:
     
        return {
          
          ...state,
          episodies: [...action.payload.data],
        };



        
      
    case CLEAN_DETAIL:
      return {
        ...state,
        animeDetail: {},
      };
    

    default:
      return { ...state };
  }
};

export default rootReducer;
