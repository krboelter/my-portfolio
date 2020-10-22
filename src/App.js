import React from 'react';
import styled from 'styled-components'
import {Route} from 'react-router-dom'

import Nav from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
    return (
        <Main className="App">
          <Nav />
          <Buffer />

          <Page>
              <Route exact path='/' component={About} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/resume' component={Resume} />
          </Page>
        </Main>
    );
}

export default App;

const Main = styled.div`
    width: 100%;
    text-align: center;
    height: 100vh;
    margin: 0 auto;
`

const Buffer = styled.div`
    height: 65px;
`

const Page = styled.div`
    width: 60%;
    margin: 0 auto;
`
