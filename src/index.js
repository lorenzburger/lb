import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Home from './views/home'
import Main from './components/Main'
import Header from './components/Header'
import './index.css'
import { HashRouter as Router, Route } from 'react-router-dom'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const App = () => (
  <Router>
    <Wrapper>
      <Main>
        <Route exact path="/" component={Home}/>
      </Main>
    </Wrapper>
  </Router>
)
export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
