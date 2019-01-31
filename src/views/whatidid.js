import React, { Component } from 'react'
import styled from 'styled-components'

import Downloads from '../components/Downloads'

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

class WhatIDid extends Component {
  render() {
    return (
      <Wrapper>
        <BackgroundImage className="background"/>
        <Downloads/>
      </Wrapper>
    )
  }
}

export default WhatIDid
