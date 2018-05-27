import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = styled.header`
  display: flex;
  align-items: center;
  background: black;
`

const HeaderElement = styled(Link)`
  flex: 1;
  display: inline-block;
  text-decoration: none;
  color: white;
`

export default () => <Header>
  <HeaderElement to='/'>
    <h1>👨‍🔧</h1>
  </HeaderElement>
</Header>
