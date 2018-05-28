import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: absolute;
  top: 45%;
  left: 33%;
  @media (max-width: 600px) {
    position: absolute;
    top: 25%;
    left: 20%;
  }
`

const What = styled.div`
  flex: 1;
  color: white;
`

export default () => <Wrap>
  <What>
    <h1>
      "no idea."
    </h1>
  </What>
</Wrap>
