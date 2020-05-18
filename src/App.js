import React from 'react';
import './App.css';
import styled from 'styled-components'

import Nav from './components/Navigation'
import Projects from './components/Projects'

const Main = styled.div`
    width: 60%;
    height: 100vh;
    margin: 0 auto;
    padding: 0 25px;
    background-color: #dedede;
    box-shadow: 0 0 20px black;
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
