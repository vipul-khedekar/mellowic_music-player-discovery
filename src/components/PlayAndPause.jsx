import { IoPlayCircle, IoPauseCircle } from "react-icons/io5";

function PlayAndPause(props) {
  const { song, isPlaying, activeSong, handlePlay, handlePause } = props;

  return (
    <div>
      {isPlaying && activeSong?.title === song.title ? (
        <IoPauseCircle onClick={() => handlePause()} size={40} />
      ) : (
        <IoPlayCircle onClick={() => handlePlay()} size={40} />
      )}
    </div>
  );
}

export default PlayAndPause;
