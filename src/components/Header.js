import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrap = styled.div`
  position: absolute:
  top: 0;
  left: 0;
  width: 100%;
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

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding-bottom: 10px;
  padding-top: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  };
`

const Fader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  };
  flex-wrap: nowrap;
  padding-bottom: 10px;
  padding-top: 10px;
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

const Title = styled.div`
  padding-left: 2%;
    @media (max-width: 600px) {
      padding: 0;
      align-items: center;
    }
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
`

const Burger = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 600px) {
    margin: 0;
  }
  margin: 18px 30px 10px 0px;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-itmes: baseline;
  width: 500px;
  @media (max-width: 600px) {
    width: 100%
  }
`

const HeaderElement = styled(Link)`
  display: flex;
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin: 10px 30px 10px 0px;
  @media (max-width: 600px) {
    margin: 0px 0px 10px 0px;
    font-weight: 300;
    font-size: 12px;
  };
  :active {
    transform: scale(0.9, 0.9);
  }
`

class Header extends Component {

  render() {
    return (
      <HeaderWrap>
        <BackgroundImage />
        <HeaderContainer>
          <Title onClick={this.props.otherClick}>
            <Burger to='/'>
              <p>LORENZ 🍔</p>
            </Burger>
          </Title>
          <Menu>
            <Fader>
              <HeaderElement to='/whatido' onClick={this.props.otherClick}>
                <p>PROJECTS</p>
              </HeaderElement>
              <HeaderElement to='/whatidid' onClick={this.props.otherClick}>
                <p>CV</p>
              </HeaderElement>
              <HeaderElement to='/' onClick={this.props.contactClick}>
                <p>CONTACT</p>
              </HeaderElement>
            </Fader>
          </Menu>
        </HeaderContainer>
      </HeaderWrap>
    )
  }
}

export default Header
