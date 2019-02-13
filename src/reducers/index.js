import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Srubs",
      duration: "4:05"
    },
    {
      title: "Macarena",
      duration: "2:30"
    },
    {
      title: "All Star",
      duration: "3:30"
    },
    {
      title: "I want it that way",
      duration: "1:30"
    }
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: SelectedSongReducer
});
