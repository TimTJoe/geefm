import { Container } from "@mui/material";
import "./App.css";
import Background from "./components/Background";
import Menu from "./components/Menu";
import styled from "@emotion/styled";
import Controls from "./components/Controls";

const Main = styled(Container)`
  background: rgba(214, 209, 209, 0.589);
  backdrop-filter: blur(40px);
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Background>
      <Menu />
      <Main maxWidth="md">
        <Controls />
      </Main>
    </Background>
  );
}

export default App;
