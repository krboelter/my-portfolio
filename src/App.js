import React from 'react';
import styled from 'styled-components'

import Nav from './components/Navigation'
import Projects from './components/Projects'

const Main = styled.div`
    text-align: center;
    height: 100vh;
    margin: 0 auto;
`


function App() {
    return (
        <Main className="App">
            <Nav />
            <Projects />
        </Main>
    );
}

export default App;
