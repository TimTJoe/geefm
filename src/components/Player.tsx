import ReactPlayer from "react-player";
const url = "https://stream-173.zeno.fm/cqqzg1637reuv";

const Player = () => {
    return <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playing={true}
        muted={true}
    />;
};

export default Player