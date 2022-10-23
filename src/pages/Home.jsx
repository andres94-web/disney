import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import styled from 'styled-components';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import ImgSlider from '../components/sections/ImgSlider';
import NewDisney from '../components/sections/NewDisney';
import Originals from '../components/sections/Originals';
import Recommends from '../components/sections/Recommends';
import Trending from '../components/sections/Trending';
import Viewers from '../components/sections/Viewers';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

//Obteniendo todos los datos de la base de datos de Firebase y almacenando cada tipo en su propia matriz.
// Luego use redux para guardar los datos y usarlos en otros componentes.

  useEffect(() => {
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case 'new':
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case 'trending':
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  min-height: calc(100vh - 250px);
  position: relative;
  background-image: url('/images/home-background.png');
  background-size: cover;
  top: 7rem;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

  &:after {
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
    background-image: url('/images/home-background.png') center center / cover
      no-repeat fixed;
  }
`;

export default Home;
