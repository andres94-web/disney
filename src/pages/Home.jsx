import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../components/sections/ImgSlider';
import NewDisney from '../components/sections/NewDisney';
import Originals from '../components/sections/Originals';
import Recommends from '../components/sections/Recommends';
import Trending from '../components/sections/Trending';
import Viewers from '../components/sections/Viewers';

const Home = () => {
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
