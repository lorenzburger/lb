import React, { Component } from 'react'
import styled from 'styled-components'

import { quotes } from '../assets/quotes'

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
const Quote = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  font-size: 26px;
  width: 50%;
`

class WhatIDo extends Component {

  quotize = (quotes) => {
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    return quote
  }

  render() {
    return (
      <Wrapper>
        <BackgroundImage className="background"/>
        <Quote>{this.quotize(quotes)}</Quote>
      </Wrapper>
    )
  }
}

export default WhatIDo
