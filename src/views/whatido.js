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
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  font-weight: bold;
  font-size: 26px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
  }
`

const Author = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  font-weight: bold;
  font-size: 26px;
  margin-top: 15px;
  padding-right: 30px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
  }
`

const QuoteWrapper = styled.div`
  display: inline-block;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  @media (min-width: 1600px) {
    width: 50%;
  };
`

class WhatIDo extends Component {

  quotize = (quotes) => quotes[Math.floor(Math.random()*quotes.length)];

  render() {
    const quote = this.quotize(quotes)
    return (
      <Wrapper>
        <BackgroundImage className="background"/>
        <QuoteWrapper>
          <Quote>{Object.values(quote)[0]}</Quote>
          <Author>—{Object.keys(quote)[0]}</Author>
        </QuoteWrapper>
      </Wrapper>
    )
  }
}

export default WhatIDo
