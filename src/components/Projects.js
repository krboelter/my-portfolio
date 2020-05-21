import React from 'react'
import styled from 'styled-components'

export default function Projects() {
    return (
        <Container>
            <H2>PROJECTS</H2>
            <Content>
				Hello World
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
	margin-right: 6rem;
    width: 50%;
    height: 500px;
    border-radius: 5px;
    background-image: linear-gradient(to left, black, 85%, rgba(0, 0, 0, 0));
`

const H2 = styled.h2`
    color: white;
    font-family: 'Special Elite', cursive;
    font-size: 35px;
    font-weight: bold;
    text-decoration: underline;
    text-shadow: 2px 2px 4px #00ff00;
    margin-bottom: 35px;
    margin-top: 40px;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 10%;
`

