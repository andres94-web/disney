import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Originals = () => {
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://preview.redd.it/dg5zhxuc6py61.jpg?width=640&height=948&crop=smart&auto=webp&s=38982bc30ce9304ec49de21e3174b729eca6b241"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://preview.redd.it/dg5zhxuc6py61.jpg?width=640&height=948&crop=smart&auto=webp&s=38982bc30ce9304ec49de21e3174b729eca6b241"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://preview.redd.it/dg5zhxuc6py61.jpg?width=640&height=948&crop=smart&auto=webp&s=38982bc30ce9304ec49de21e3174b729eca6b241"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://preview.redd.it/dg5zhxuc6py61.jpg?width=640&height=948&crop=smart&auto=webp&s=38982bc30ce9304ec49de21e3174b729eca6b241"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  margin-top: 1rem;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: contain;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-sizing: rgb(0 0 0 /80%) 0 40px 58px -16px,
      rgb(0 0 0 /72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Originals;
