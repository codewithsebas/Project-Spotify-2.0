import { FaPause, FaPlay } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPause
      size={50}
      className="text-gray-300"
     onClick={handlePause} />
  ) : (
    <FaPlay
      size={50}
      className="text-gray-300"
     onClick={handlePlay} />
  );

export default PlayPause;
