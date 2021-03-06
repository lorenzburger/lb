import React from 'react'
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
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1920px-David_-_The_Death_of_Socrates.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const App = () => (
  <Router>
    <Wrapper>
      <Header />
      <Main>
       <Route exact path="/" component={Home}/>
       <Route exact path="/whatido" component={WhatIDo}/>
       <Route exact path="/whatidid" component={WhatIDid}/>
      </Main>
      <Footer />
    </Wrapper>
  </Router>
)
export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
