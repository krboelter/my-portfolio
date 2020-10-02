import React from 'react';
import styled from 'styled-components'

import Nav from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
    return (
        <Main className="App">
          <Nav />
          <Content>
    			<Left>
                    <About />
    			</Left>
    			<Right>
                    <Projects />
    			</Right>
                <Left>
                    <Contact />
                </Left>
          </Content>
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

const Content = styled.div`
    margin-top: 100px;
	display: block;
`

const Left = styled.div`
	display: block;
	width: 100%;
	float: left;
`

const Right = styled.div`
	display: block;
	width: 100%;
	float: right;
`
