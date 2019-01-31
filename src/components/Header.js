import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrap = styled.div`
  position: absolute:
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: black;
  opacity: 0.6;
`

const Fader = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5%;
  padding-right: 5%;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
  };
  &:hover {
    a {
      opacity: 0.3;
    }
  }
  a {
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`

const Burger = styled(Link)`
  @media (max-width: 600px) {
    padding: 0;
    margin: 0;
  }
  color: white;
  font-weight: bold;
  text-decoration: none;
  :active {
    transform: scale(0.8, 0.8);
  }
`

const Menu = styled.div`
  display: flex;
  width: 30%;
  max-width: 250px;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%
    padding: 0;
    max-width: none;
  }
`

const HeaderElement = styled(Link)`
  display: flex;
  color: white;
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 600px) {
    margin: 15px 20px 10px 20px;
    font-weight: 300;
    font-size: 14px;
  };
  :active {
    transform: scale(0.8, 0.8);
  }
`

class Header extends Component {

  render() {
    return (
      <HeaderWrap>
        <BackgroundImage />
        <Fader>
          <Burger to='/whatidid' onClick={this.props.otherClick}>
            <p>LORENZ 🍔</p>
          </Burger>
          <Menu>
            <HeaderElement to='/whatido' onClick={this.props.otherClick}>
              <p>PROJECTS</p>
            </HeaderElement>
            <HeaderElement to='/' onClick={this.props.contactClick}>
              <p>CONTACT</p>
            </HeaderElement>
          </Menu>
        </Fader>
      </HeaderWrap>
    )
  }
}

export default Header
