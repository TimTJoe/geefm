import "./App.css";
import ReactPlayer from "react-player";
const url =
  "https://stream-173.zeno.fm/cqqzg1637reuv";
function App() {
  return (
    <>
      <h4>Hello Gee FM 104.7</h4>
      <hr />
      <ReactPlayer url={url} controls />
    </>
  );
}

export default App;
