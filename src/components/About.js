import React from 'react'
import styled from 'styled-components'
import picture from '../images/Me_and_Dee.jpg'

export default function About() {
    return (
        <Container>
            <H2>ABOUT ME</H2>
            <Content>
                <Portrate src={picture}/>
                <H1>KEN BOELTER</H1>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 6rem;
    width: 50%;
    height: 500px;
    border-radius: 5px;
    background-image: linear-gradient(to right, black, 85%, rgba(0, 0, 0, 0));
`

const H2 = styled.h2`
    color: white;
    font-family: "Special Elite", cursive;
    font-style: italic;
    font-size: 35px;
    text-decoration: underline;
    text-shadow: 2px 2px 5px #00ff00;
    margin-bottom: 35px;
    margin-top: 16px;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 15%;
`

const H1 = styled.h1`
    color: darkgray;
`

const Portrate = styled.img`
    width: 200px;
    height: 270px;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ff00;
`
