import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import styled from 'styled-components';

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log('No such document in Firebase');
        }
      })
      .catch((err) => {
        console.log('Error getting document: ', err.message);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="play" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <img src="/images/group-icon.png" alt="Group" />
          </GroupWatch>
        </Controls>
      </ContentMeta>
      <SubTitle>
        <h2>{detailData.subTitle}</h2>
      </SubTitle>
      <Description>
        <p>{detailData.description}</p>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 7rem;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media only screen and (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 30vh;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 22vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 24px 0;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  letter-spacing: 1.8px;
  margin: 0 22px 0 0;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  background-color: rgb(249, 249, 249);
  color: #000;
  transition: all 250ms ease-in-out;

  img {
    width: 32px;
  }

  &:hover {
    background-color: rgb(172, 172, 172);
  }

  @media only screen and (max-width: 768px) {
    height: 45px;
    padding: 0 12px;
    font-size: 12px;
    margin: 0 10px 0 0;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  span {
    background-color: rgba(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
  &:hover {
    background-color: rgba(172, 172, 172);
  }

  @media only screen and (max-width: 389px) {
    margin-top: 10px;
  }
`;

const GroupWatch = styled(AddList)``;

const SubTitle = styled.div`
  color: white;
  margin: 3rem auto;
  min-height: 20px;

  h2 {
    font-size: 2.5rem;

    @media only screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Description = styled.div`
  p {
    color: white;
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 26px;
    padding: 16px 0;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export default Detail;
