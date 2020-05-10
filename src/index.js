import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Home from './views/home'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

import WhatIDo from './views/whatido'
import WhatIDid from './views/whatidid'

import './index.css'
import { HashRouter as Router, Route } from 'react-router-dom'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1920px-David_-_The_Death_of_Socrates.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

// dont like art alternative background: https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJ8ojm8aTgAhWN2KQKHWwqAYkQjRx6BAgBEAU&url=https%3A%2F%2Fimgur.com%2Fgallery%2FiWKad22&psig=AOvVaw1d7Zz_Ytxpl05ED12OSKgd&ust=1549466265244586

class App extends Component {
  state = {
    bump: false,
    fade: false,
  }

  handleContactClick = () => {
    this.setState({
      bump: true,
      fade: false,
    })
  }

  handleProjectsClick = () => {
    this.setState({
      fade: true,
      bump: false,
    })
  }

  resetState = () => {
    this.setState({
      bump: false,
      fade: false,
    })
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Header
            contactClick={(e) => {this.handleContactClick()}}
            projectsClick={(e) => {this.handleProjectsClick()}}
            otherClick={(e) => {this.resetState()}}
          />
          <Main>
           <Route exact path="/" component={Home}/>
           <Route exact path="/whatido" component={WhatIDo}/>
           <Route exact path="/whatidid" component={WhatIDid}/>
          </Main>
          <Footer bump={this.state.bump} fade={this.state.fade}/>
        </Wrapper>
      </Router>
    )
  }
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
