import ReactPlayer from "react-player";
const url = "https://stream-173.zeno.fm/cqqzg1637reuv";

const Player = () => {
    return <ReactPlayer url={url} controls />;
};

export default Player