import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrap = styled.div`
  position: absolute:
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  opacity: 0.6;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  };
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`

const Burger = styled(Link)`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5%;
  padding-right: 5%;
  @media (max-width: 600px) {
    margin: 15px 20px 10px 20px;
    font-weight: 300;
    font-size: 14px;
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
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const Projects = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5%;
  padding-right: 5%;
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
        <Menu>
        <Burger to='/' onClick={this.props.contactClick}>
          <p>LORENZ 🍔</p>
        </Burger>
          <Projects to='/whatido' onClick={this.props.projectsClick}>
            <p>PROJECTS</p>
          </Projects>
        </Menu>
      </HeaderWrap>
    )
  }
}

export default Header
