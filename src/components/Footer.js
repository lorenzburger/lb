import React from 'react'
import styled from 'styled-components'
import SocialBadge from 'react-social-badge'

const Footer = styled.div`
  position: absolute:
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
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

const FooterElement = styled.div`
  flex: 1;
`

export default () => <Footer>
  <BackgroundImage />
  <FooterElement>
    <SocialBadge
      iconColor='white'
      badgeColor='transparent'
      url='http://github.com/lorenzburger'
    />
    <SocialBadge
      iconColor='white'
      badgeColor='transparent'
      url='http://instagramm.com/lrnzbrgr'
    />
    <SocialBadge
      iconColor='white'
      badgeColor='transparent'
      url='http://linkedin.com/in/lorenzburger'
    />
  </FooterElement>
</Footer>
