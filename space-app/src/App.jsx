import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Banner } from "./components/Banner";
import bannerBackground from "./assets/banner.png";

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

function App() {
  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Aside />
          <Banner
            backgroundImage={bannerBackground}
            text={"A galeria mais completa de fotos do espaço!"}
          />
        </MainContainer>
      </AppContainer>
    </BackgroundGradient>
  );
}

export default App;
