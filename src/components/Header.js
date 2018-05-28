import React, {Component} from 'react'
import styled from 'styled-components'

const HeaderWrap = styled.div`
  position: absolute:
  top: 0;
  left: 0;
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

const HeaderElement = styled.div`
  display: flex;
  color: white;
  font-weight: 800;
  margin: 10px 30px 10px 0px;
  @media (max-width: 600px) {
    margin: 10px 0px 10px 0px;
  };
  transition: all 0.5s ease;
`

const Fader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  };
  flex-wrap: nowrap;
  padding-bottom: 10px;
  padding-top: 10px;
  &:hover {
    div {
      opacity: 0.6;
    }
  }
  div {
    &:hover {
      opacity: 1;
      cursor: pointer
    }
  }
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      do: false,
      did: false,
      contacted: false
    }
  }

  handleDoClick () {
    this.setState({ do: !this.state.do })
    this.setState({ did: false })
    this.setState({ contacted: false })
  }

  handleDidClick () {
    this.setState({ did: !this.state.did })
    this.setState({ do: false })
    this.setState({ contacted: false })
  }

  handleContactedClick () {
    this.setState({ contacted: !this.state.contacted })
    this.setState({ do: false })
    this.setState({ did: false })
  }

  render() {
    console.log(this.state.do)
    console.log(this.state.did)
    console.log(this.state.contacted)
    return (
      <HeaderWrap>
        <BackgroundImage />
        <Fader>
          <HeaderElement>
            <p onClick={this.handleDoClick.bind(this)}>WHAT I DO</p>
          </HeaderElement>
          <HeaderElement>
            <p onClick={this.handleDidClick.bind(this)}>WHAT I DID</p>
          </HeaderElement>
          <HeaderElement>
            <p onClick={this.handleContactedClick.bind(this)}>CONTACT</p>
          </HeaderElement>
        </Fader>
      </HeaderWrap>
    )
  }
}

export default Header
