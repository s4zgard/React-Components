import "bulma/css/bulma.css";
import "../styles.css";
import MoviePlaylist from "../components/MoviePlaylist";
import SongPlaylist from "../components/SongPlaylist";
import { useDispatch } from "react-redux";
import { reset } from "../store";

const PlaylistPage = () => {
  document.title = "Playlist Generator";

  const dispatch = useDispatch();
  return (
    <div className="container is-fluid">
      <h3 className="title is-4">Playlist Generator (Redux Toolkit)</h3>
      <button onClick={() => dispatch(reset())} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
};

export default PlaylistPage;
