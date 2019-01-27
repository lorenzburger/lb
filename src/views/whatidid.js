import React, { Component } from 'react'
import styled from 'styled-components'

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
const Cv = styled.div`
  position: absolute;
  right: -500px;
  background: lightgrey;
  width: 50vw;
  height: 30vw;
  opacity: 0.3;
`

class WhatIDid extends Component {
  render() {
    return (
      <Wrapper>
        <BackgroundImage className="background"/>
        <Cv>yolo</Cv>
      </Wrapper>
    )
  }
}

export default WhatIDid
