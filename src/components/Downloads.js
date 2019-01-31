import React from 'react'
import styled from 'styled-components'

const Downloads = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  height: 80%;
  @media (max-width: 600px) {
    width: 100%;
    height: 90%;
  };
`

const InfoElement = styled.div`
  display: flex;
  border: 1px solid white;
  margin: 5px 10px 5px 10px;
  flex-direction: row;
  justify-content: space-between;
  overflow-y: scroll;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  };
`

const Bio = styled.div`
  display: block;
  border: 1px solid grey;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  padding: 5px 20px 5px 20px;
  width: 30%;
  @media (max-width: 600px) {
    width: 100%;
  };
`

const Avatar = styled.img`
  display: flex;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 20px;
  overflow: hidden;
  opacity: 0.6;
  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  };
`

const Info = styled.div`
  display: flex;
  border: 1px solid grey;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 20px 5px 20px;
  width: 70%;
  @media (max-width: 600px) {
    width: 100%;
  };
`

const InfoElementText = styled.span`
  font-family: 'Open Sans', sans-serif;
  border: 1px solid yellow;
  font-size: 13px;
  font-style: italic;
  margin-bottom: 40px;
`

const Icon = styled.svg`
  border: 1px solid white;
  align-self: center;
  flex: none;
  fill: white;
  width: 48px;
  height: 48px;
  margin: 10px;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  };
`

export default () => <Downloads>
  <InfoElement>
    <Bio>
      <Avatar src='https://media.licdn.com/dms/image/C4E03AQEzl61bLcJWBg/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=Z0dY5zuiSfYWGLG5wFtvwiBTVqX2mqbbhJR0ag8N7is' alt='avatar'/>
    <span>Hey, how YOU doin'?</span>
    <span>I'm Lorenz.</span>
    <span>This is my personal website, here you don't have to worry about cookies and your privacy!</span>
    <span>A monkey with a MacBook and internet access.</span>
    <span>A monkey with a MacBook and internet access.</span>
    <span>Some call that particular combination <b>Software Engineer</b></span>
    </Bio>
      <Info>
      <Icon viewBox="0 0 100 100">
        <path d="M66.1,9H19.9c-3.2,0-5.9,2.6-5.9,5.9v57.3c0,3.2,2.6,5.9,5.9,5.9H29v5.1c0,3.2,2.6,5.9,5.9,5.9h42.2c3.2,0,5.9-2.6,5.9-5.9
          V29.9c0-3.2-2.6-5.9-5.9-5.9H72v-9.1C72,11.6,69.4,9,66.1,9z M19.9,74c-1,0-1.9-0.8-1.9-1.9V14.9c0-1,0.8-1.9,1.9-1.9h46.2
          c1,0,1.9,0.8,1.9,1.9V53H52.9c-3.2,0-5.9,2.7-5.9,5.9V74H19.9z M65.9,57L51,71.8V58.9c0-1.1,0.8-1.9,1.9-1.9H65.9z M77.1,28
          c1,0,1.9,0.8,1.9,1.9v53.3c0,1-0.8,1.9-1.9,1.9H34.9c-1,0-1.9-0.8-1.9-1.9V78h15c1.6,0,3-0.6,4.2-1.7l18.1-18
          c1.1-1.1,1.7-2.6,1.7-4.2V28H77.1z"/>
      </Icon>
      <InfoElementText>
      The use of lead hunting ammunition in Germany between 1980 and 2000
      </InfoElementText>
      <Icon viewBox="0 0 100 100">
        <path d="M66.1,9H19.9c-3.2,0-5.9,2.6-5.9,5.9v57.3c0,3.2,2.6,5.9,5.9,5.9H29v5.1c0,3.2,2.6,5.9,5.9,5.9h42.2c3.2,0,5.9-2.6,5.9-5.9
          V29.9c0-3.2-2.6-5.9-5.9-5.9H72v-9.1C72,11.6,69.4,9,66.1,9z M19.9,74c-1,0-1.9-0.8-1.9-1.9V14.9c0-1,0.8-1.9,1.9-1.9h46.2
          c1,0,1.9,0.8,1.9,1.9V53H52.9c-3.2,0-5.9,2.7-5.9,5.9V74H19.9z M65.9,57L51,71.8V58.9c0-1.1,0.8-1.9,1.9-1.9H65.9z M77.1,28
          c1,0,1.9,0.8,1.9,1.9v53.3c0,1-0.8,1.9-1.9,1.9H34.9c-1,0-1.9-0.8-1.9-1.9V78h15c1.6,0,3-0.6,4.2-1.7l18.1-18
          c1.1-1.1,1.7-2.6,1.7-4.2V28H77.1z"/>
      </Icon>
      <InfoElementText> Photoluminescence study on nitrogen aluminium complexes in state of the art silicon wafers
      </InfoElementText>
    </Info>
  </InfoElement>
</Downloads>

// <iframe src="https://giphy.com/embed/3HAYjf1HlPpP7EWHJbq" width="280" height="270" frameBorder="0"></iframe>

// <Icon viewBox="0 0 10 17">
//   <path d="M5.2 4.9C5.5 3.2 6.1 1.3 6.4 0.5 6.5 0.3 6.3 0 6.1 0L5.6 0C5.2 0 4.9 0.2 4.6 0.5 3.5 2.1 0.1 7.3 0 11.7 0 11.8 0 11.9 0 11.9 0 14.8 2.4 17.2 5.3 17 7.8 16.8 9.8 14.8 10 12.3 10.1 9.9 8.6 7.8 6.5 7.1 5.6 6.8 5 5.9 5.2 4.9" />
// </Icon>
// <Icon viewBox="0 0 26 24">
//   <polygon points="13 19.5 5.4 23.5 6.8 15 0.6 9 9.2 7.7 13 0 16.8 7.7 25.4 9 19.2 15 20.6 23.5"/>
// </Icon>
// <Icon viewBox="0 0 13 24">
//   <path d="M2.4 12L12.7 1.7C13.1 1.3 13.1 0.7 12.7 0.3 12.3-0.1 11.7-0.1 11.3 0.3L0.3 11.3C-0.1 11.7-0.1 12.3 0.3 12.7L11.3 23.7C11.7 24.1 12.3 24.1 12.7 23.7 13.1 23.3 13.1 22.7 12.7 22.3L2.4 12Z"/>
// </Icon>
