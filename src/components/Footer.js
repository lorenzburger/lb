import React from 'react'
import styled, { keyframes } from 'styled-components'
import SocialBadge from 'react-social-badge'

const bounce = keyframes`
  0% {
    transform: translateY(50px);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
`

const bounceHigher = keyframes`
  0% {
    transform: translateY(50px);
  }
  50% {
    transform: translateY(-60px);
  }
  100% {
    transform: translateY(0px);
  }
`

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`

const Bubble = styled.p`
  opacity: ${props => props.fade ? 0.8 : 0};
  pointer-events: ${props => props.fade ? `auto` : `none`};
  animation: ${props => props.fade
    ?
      `${fadeInOut} 1.5s normal forwards ease-in-out`
    :
      null
  };
	position: absolute;
	background: #8efa00;
	border-radius: .4em;
  transform: translateX(165px);
	right: 50%;
	top: -1.4%;
	width: 330px;
	height: 18px;
	border-left-color: #8efa00;
	border-right: 0;
	margin-top: -30px;
  text-align: center;
  font-size: 12px;
  color: black;
  @media (max-width: 600px) {
    top: 5%;
    font-size: 10px;
    width: 280px;
    transform: translateX(140px);
  };
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
const Fader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-between;
  flex-wrap: nowrap;
  width: 80%;
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

const FooterElement = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`

const StyledSocialBadge1 = styled(SocialBadge)`
  opacity: ${props => props.bump ? 1 : 0};
  transition: opacity 0.5s ease-out;
  pointer-events: ${props => props.bump ? `auto` : `none`};
  animation: ${props => props.bump
    ?
      `${bounce} 0.8s normal forwards ease-in-out`
    :
      null
  };
`
const StyledSocialBadge2 = styled(SocialBadge)`
  opacity: ${props => props.bump ? 1 : 0};
  transition: opacity 0.5s ease-out;
  pointer-events: ${props => props.bump ? `auto` : `none`};
  animation: ${props => props.bump
    ?
      `${bounceHigher} 0.6s normal forwards ease-in-out`
    :
      null
  };
`
const StyledSocialBadge3 = styled(SocialBadge)`
  opacity: ${props => props.bump ? 1 : 0};
  transition: opacity 0.5s ease-out;
  pointer-events: ${props => props.bump ? `auto` : `none`};
  animation: ${props => props.bump
    ?
      `${bounce} 0.8s normal forwards ease-in-out`
    :
      null
  };
`
const StyledSocialBadge4 = styled(SocialBadge)`
  opacity: ${props => props.bump ? 1 : 0};
  transition: opacity 0.5s ease-out;
  pointer-events: ${props => props.bump ? `auto` : `none`};
  animation: ${props => props.bump
    ?
      `${bounceHigher} 0.6s normal forwards ease-in-out`
    :
      null
  };
`

export default (props) => <Footer>
  <BackgroundImage />
    <Fader>
      <Bubble fade={props.fade}>
        Lorenz has been lazy, you should try again!
      </Bubble>
      <FooterElement bump={props.bump}>
        <StyledSocialBadge1
          bump={props.bump}
          iconColor='white'
          badgeColor='transparent'
          url='http://github.com/lorenzburger'
        />
        <StyledSocialBadge2
          bump={props.bump}
          iconColor='white'
          badgeColor='transparent'
          url='http://instagramm.com/lrnzbrgr'
        />
        <StyledSocialBadge3
          bump={props.bump}
          iconColor='white'
          badgeColor='transparent'
          url='http://linkedin.com/in/lorenzburger'
        />
        <StyledSocialBadge4
          bump={props.bump}
          iconColor='white'
          badgeColor='transparent'
          icon='envelope-square'
          url='mailto:lorenzburger@arcor.de'
        />
      </FooterElement>
    </Fader>
</Footer>
