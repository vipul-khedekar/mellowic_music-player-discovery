import { IoPlayCircle, IoPauseCircle } from "react-icons/io5";

function PlayAndPause(props) {
  const { song, isPlaying, activeSong, handlePlay, handlePause } = props;

  return (
    <div>
      {isPlaying && activeSong?.title === song.title ? (
        <IoPauseCircle size={40} onClick={() => handlePause()} />
      ) : (
        <IoPlayCircle size={40} onClick={() => handlePlay()} />
      )}
    </div>
  );
}

export default PlayAndPause;
