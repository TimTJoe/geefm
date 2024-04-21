import { Container } from "@mui/material";
import "./App.css";
import Background from "./components/Background";
import Menu from "./components/Menu";
import styled from "@emotion/styled";

const Main = styled(Container)`
  background: rgba(255, 255, 255, 0.589);
  backdrop-filter: blur(40px);
  min-height: 100%;
`;

function App() {
  return (
    <Background>
      <Menu />
      <Main maxWidth="md">
        logding Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi officiis, beatae ullam tempore veniam labore ab voluptatem,
        quo sunt assumenda iusto id eius culpa placeat debitis nostrum! Quam,
        animi nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates, in voluptatem eos dolores quisquam quos saepe magni ullam
        itaque, corporis, debitis nobis et perspiciatis consequuntur at deleniti
        dicta tenetur quis.
      </Main>
    </Background>
  );
}

export default App;
