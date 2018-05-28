import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background-color: black;
  opacity: 0.6;
`

const Title = styled.div`
  position: relative;
  @media (min-width: 600px) {
    position: absolute;
    top: -94px;
    left: 20px;
  };
`


class Home extends Component {
  render() {
    return (
      <Wrapper>
        <BackgroundImage className="background"/>
        <Title className="home">
          <h1>Lorenz 🍔</h1>
        </Title>
      </Wrapper>
    )
  }
}

export default Home
