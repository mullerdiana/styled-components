import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Banner } from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import { Gallery } from "./components/Gallery";

import photos from "./fotos.json";
import { useState } from "react";
import { ModalZoom } from "./components/ModalZoom";

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

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [photoSelected, setPhotoSelected] = useState(null);

  const toggleFavorite = (photo) => {
    if (photo.id === photoSelected?.id) {
      setPhotoSelected({
        ...photoSelected,
        favorite: !photoSelected.favorite
      })
    }
    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite:
            galleryPhoto.id === photo.id ? !photo.favorite : galleryPhoto.favorite,
        };
      })
    );
  };

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Aside />
          <GalleryContent>
            <Banner
              backgroundImage={bannerBackground}
              text={"A galeria mais completa de fotos do espaço!"}
            />
            <Gallery
              onPhotoSelected={(photo) => setPhotoSelected(photo)}
              toggleFavorite={toggleFavorite}
              photos={galleryPhotos}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
      photo={photoSelected} 
      OnClose={() => setPhotoSelected(null)}
      toggleFavorite={toggleFavorite}
      />
    </BackgroundGradient>
  );
};

export default App;
