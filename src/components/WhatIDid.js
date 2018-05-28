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
      <li>I used photoluminescence spectroscopy to find an emission line specific to nitrogen impurities in high-purity silicon wafers.(download)
      </li>
      <li>I also investigated why lead free hunting ammunition came to be and why its use is still limited.</li>
      <li>carpentry.</li>
    </h1>
  </What>
</Wrap>
