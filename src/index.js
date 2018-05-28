import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Home from './views/home'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import { HashRouter as Router, Route } from 'react-router-dom'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://pre00.deviantart.net/feb5/th/pre/i/2013/127/a/a/oldgrowth_canadian_rainforest_stock_2_by_leeorr_stock-d64ekcn.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

const App = () => (
  <Router>
    <Wrapper>
      <Header />
      <Home />
      <Footer />
    </Wrapper>
  </Router>
)
export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
