import React, { useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // Saving the user data from firebase into user reducer to use it globally in the app.
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  // Handle SignIn and SignOut functionality.
  // if there is data of user logged in then redirect to home page.
  // else redirect to login page

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => alert(error.message));
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push('/');
        })
        .catch((err) => alert(err.message));
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push('/home');
      } else {
        history.push('/');
      }
    });
  });

  return (
    <Nav>
      <Logo href="/">
        <img src="/images/logo.svg" alt="Brand Logo" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="Home" />
              <span>home</span>
            </a>

            <a href="/search">
              <img src="/images/search-icon.svg" alt="Search" />
              <span>search</span>
            </a>

            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="Watch list" />
              <span>watchlist</span>
            </a>

            <a href="/originals">
              <img src="/images/original-icon.svg" alt="Originals" />
              <span>originals</span>
            </a>

            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="Movies" />
              <span>movies</span>
            </a>

            <a href="/series">
              <img src="/images/series-icon.svg" alt="Series" />
              <span>series</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  padding: 0 3.6rem;
  background-color: #01040e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  font-size: 1.2rem;
  top: 0;
  left: 0;
  z-index: 22;
`;

const Logo = styled.a`
  width: 7rem;
  min-width: 4rem;
  margin-top: 4px;
  max-height: 5rem;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  & img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin-left: 2.5rem;
  height: 100%;
  justify-content: flex-end;
  margin: 0 auto 0 2rem;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: normal;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      margin-right: 2px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 1rem;
      letter-spacing: 1.5px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        content: '';
        width: auto;
        height: 2px;
        display: block;
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        position: absolute;
        opacity: 0;
        visibility: hidden;
        bottom: -6px;
        left: 0px;
        right: 0px;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }

      @media only screen and (max-width: 950px) {
        font-size: 0.8rem;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  border: 1px solid #f9f9f9;
  color: #f9f9f9;
  border-radius: 4px;
  background-color: transparent;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
    color: #01040e;
    border-color: transparent;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const UserImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  margin: 0 0.5rem;
  padding: 0.2rem;
  border: 2px solid #f4f4f4;
`;

const DropDown = styled.div`
  position: absolute;
  top: 75px;
  right: 0;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0, 0, 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 64px;
  width: 64px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
