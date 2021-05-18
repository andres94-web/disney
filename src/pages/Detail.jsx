import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
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
      <Subtitle>
        <h2>
          2018 • 1h 58m • Science Fiction, Family, Animation, Action-Adventure
        </h2>
      </Subtitle>
      <Description>
        <p>
          While Helen is called on to lead a campaign to bring back the Supers,
          Bob navigates the day-to-day heroics of “normal” life at home with
          Violet, Dash and Jack-Jack, whose superpowers are about to be
          discovered. Their mission is derailed, however, when a new villain
          emerges with a brilliant and dangerous plot that threatens everything.
          But with Frozone by their side, the Parrs can take on anything.
        </p>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 10rem;
  padding: 0 calc(3.5vw + 5px);
  @media only screen and (max-width: 768px) {
    top: 15%;
  } ;
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
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
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
    background-color: rgb(198, 198, 198);
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
`;

const GroupWatch = styled(AddList)``;

const Subtitle = styled.div`
  color: white;
  margin: 25px auto;
`;

const Description = styled.div`
  width: 50%;
  p {
    color: white;
    font-size: 18px;

    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export default Detail;
