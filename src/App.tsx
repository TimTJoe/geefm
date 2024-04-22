import Container from "./components/Container";
import Controls from "./components/Controls";
import Media from "./components/Media";
import Visualiser from "./components/Visualiser";

function App() {
  return (
    <Container>
      <Media />
      <Visualiser />
      <Controls />
    </Container>
  );
}

export default App;
