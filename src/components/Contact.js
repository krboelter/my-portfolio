import React from 'react'
import styled from 'styled-components'

export default function Contact() {
    return (
        <Container>
            <H2>CONTACT</H2>
            <Div>Email: <Email href="mailto:krboelter@gmail.com? subject=Job Opportunity">krboelter@gmail.com</Email></Div>
            <a>hello</a>
        </Container>
    )
}

const Container = styled.div`
	display: block;
	float; left;
    width: 950px;
    height: 500px;
	margin-left: 10rem;
    border-radius: 5px;
    background-image: linear-gradient(to right, black, 85%, rgba(0, 0, 0, 0));
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

const Div = styled.div`
    text-align: left;
    color: white;
`

const Email = styled.a`
    color: lime;
`
