import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useEffect } from "react";



const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();


    const getNowPlayingMovies = async () => {
      const data = await fetch(API_URL, API_OPTIONS);
  
      const json = await data.json();
     
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;