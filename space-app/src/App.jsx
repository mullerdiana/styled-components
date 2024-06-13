import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Banner } from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import { Gallery } from "./components/Gallery";

import photos from "./fotos.json";
import { useEffect, useState } from "react";
import { ModalZoom } from "./components/ModalZoom";
import { Footer } from "./components/Footer/style";

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
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const filterTag = !tag || photo.tagId === tag;
      const filterTitle =
        !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase());
      return filterTag && filterTitle;
    });
    setGalleryPhotos(filteredPhotos);
  }, [filter, tag]);

  const toggleFavorite = (photo) => {
    if (photo.id === photoSelected?.id) {
      setPhotoSelected({
        ...photoSelected,
        favorite: !photoSelected.favorite,
      });
    }
    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite:
            galleryPhoto.id === photo.id
              ? !photo.favorite
              : galleryPhoto.favorite,
        };
      })
    );
  };

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
        <MainContainer>
          <Aside />
          <GalleryContent>
            <Banner
              backgroundImage={bannerBackground}
              text={"A galeria mais completa de fotos do espaço!"}
            />
            <Gallery
              photos={galleryPhotos}
              onPhotoSelected={(photo) => setPhotoSelected(photo)}
              toggleFavorite={toggleFavorite}
              setTag={setTag}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        photo={photoSelected}
        OnClose={() => setPhotoSelected(null)}
        toggleFavorite={toggleFavorite}
      />
      <Footer />
    </BackgroundGradient>
  );
};

export default App;
