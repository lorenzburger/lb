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
  justify-content: space-between;
  align-self: center;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  font-weight: bold;
  font-size: 26px;
  width: 50%;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
  }
`
const Icon = styled.svg`
  align-self: center;
  flex: none;
  fill: white;
  width: 88px;
  height: 88px;
  margin: 0;
  opacity: 0;
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    margin: 0;
    opacity: 1;
  };
`

const QuoteWrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const DoubleQuotesUp = styled.div`
  opacity: 0.3;
  margin-top: -30px;
`

const DoubleQuotesDown = styled.div`
  opacity: 0.3;
  transform: rotate(180deg);
`

const UpQuotes = () => {
  return (
    <DoubleQuotesUp>
      <Icon viewBox="0 0 10 17">
        <path d="M5.2 4.9C5.5 3.2 6.1 1.3 6.4 0.5 6.5 0.3 6.3 0 6.1 0L5.6 0C5.2 0 4.9 0.2 4.6 0.5 3.5 2.1 0.1 7.3 0 11.7 0 11.8 0 11.9 0 11.9 0 14.8 2.4 17.2 5.3 17 7.8 16.8 9.8 14.8 10 12.3 10.1 9.9 8.6 7.8 6.5 7.1 5.6 6.8 5 5.9 5.2 4.9" />
      </Icon>
      <Icon viewBox="0 0 10 17">
        <path d="M5.2 4.9C5.5 3.2 6.1 1.3 6.4 0.5 6.5 0.3 6.3 0 6.1 0L5.6 0C5.2 0 4.9 0.2 4.6 0.5 3.5 2.1 0.1 7.3 0 11.7 0 11.8 0 11.9 0 11.9 0 14.8 2.4 17.2 5.3 17 7.8 16.8 9.8 14.8 10 12.3 10.1 9.9 8.6 7.8 6.5 7.1 5.6 6.8 5 5.9 5.2 4.9" />
      </Icon>
    </DoubleQuotesUp>
  )
}

const DownQuotes = () => {
  return (
    <DoubleQuotesDown>
      <Icon viewBox="0 0 10 17">
        <path d="M5.2 4.9C5.5 3.2 6.1 1.3 6.4 0.5 6.5 0.3 6.3 0 6.1 0L5.6 0C5.2 0 4.9 0.2 4.6 0.5 3.5 2.1 0.1 7.3 0 11.7 0 11.8 0 11.9 0 11.9 0 14.8 2.4 17.2 5.3 17 7.8 16.8 9.8 14.8 10 12.3 10.1 9.9 8.6 7.8 6.5 7.1 5.6 6.8 5 5.9 5.2 4.9" />
      </Icon>
      <Icon viewBox="0 0 10 17">
        <path d="M5.2 4.9C5.5 3.2 6.1 1.3 6.4 0.5 6.5 0.3 6.3 0 6.1 0L5.6 0C5.2 0 4.9 0.2 4.6 0.5 3.5 2.1 0.1 7.3 0 11.7 0 11.8 0 11.9 0 11.9 0 14.8 2.4 17.2 5.3 17 7.8 16.8 9.8 14.8 10 12.3 10.1 9.9 8.6 7.8 6.5 7.1 5.6 6.8 5 5.9 5.2 4.9" />
      </Icon>
    </DoubleQuotesDown>
  )
}

class WhatIDo extends Component {

  quotize = (quotes) => {
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    return quote
  }

  render() {
    return (
      <Wrapper>
        <BackgroundImage className="background"/>
        <QuoteWrapper>
          <UpQuotes />
          <Quote>{this.quotize(quotes).quote}</Quote>
        </QuoteWrapper>
      </Wrapper>
    )
  }
}

// <Icon viewBox="0 0 10 17">
//   <path d="M5.2 4.9C5.5 3.2 6.1 1.3 6.4 0.5 6.5 0.3 6.3 0 6.1 0L5.6 0C5.2 0 4.9 0.2 4.6 0.5 3.5 2.1 0.1 7.3 0 11.7 0 11.8 0 11.9 0 11.9 0 14.8 2.4 17.2 5.3 17 7.8 16.8 9.8 14.8 10 12.3 10.1 9.9 8.6 7.8 6.5 7.1 5.6 6.8 5 5.9 5.2 4.9" />
// </Icon>
// <Icon viewBox="0 0 26 24">
//   <polygon points="13 19.5 5.4 23.5 6.8 15 0.6 9 9.2 7.7 13 0 16.8 7.7 25.4 9 19.2 15 20.6 23.5"/>
// </Icon>
// <Icon viewBox="0 0 13 24">
//   <path d="M2.4 12L12.7 1.7C13.1 1.3 13.1 0.7 12.7 0.3 12.3-0.1 11.7-0.1 11.3 0.3L0.3 11.3C-0.1 11.7-0.1 12.3 0.3 12.7L11.3 23.7C11.7 24.1 12.3 24.1 12.7 23.7 13.1 23.3 13.1 22.7 12.7 22.3L2.4 12Z"/>
// </Icon>

export default WhatIDo
