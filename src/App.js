import React from 'react';
import styled from 'styled-components'

import Nav from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'

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
            </Content>
        </Main>
    );
}

export default App;

const Main = styled.div`
    text-align: center;
    height: 100vh;
    margin: 0 auto;
`

const Content = styled.div`
    margin-top: 100px;
	display: block;
`

const Right = styled.div`
	display: block;
	float: right;
`

const Left = styled.div`
	display: block;
	float: left;
`
