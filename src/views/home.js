import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  position: relative;
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
  background-image: url("./wald.png");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;

`

const Lol = styled.div`
  position: relative;
`


class Home extends Component {
  render() {
    return (
      <Wrapper>
        <BackgroundImage className="background"/>
        <Lol className="home">
          <h1>Lorenz 🍔</h1>
        </Lol>
      </Wrapper>
    )
  }
}

export default Home
