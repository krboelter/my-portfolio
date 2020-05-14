import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    height: 75px;
    display: flex;
    justify-content: space-between;
    margin: 5px;
`
const H1 = styled.h1`
    font-family: 'Permanent Marker', cursive;
    font-size: 50px;
    text-shadow: 2px 2px 4px #00ff00;
`
const Ul = styled.ul`
    width: 33%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const A = styled.a`
    font-family: 'Special Elite', cursive;
    font-size: 22px;
    font-weight: bold;
    color: #00ff00;
    text-shadow: 2px 2px 4px black;
`

export default function Navigation() {
    return (
        <Nav>
            <H1>Ken Boelter</H1>
            <Ul>
                <li><A>PROJECTS</A></li>
                <li><A>ABOUT</A></li>
                <li><A>RESUME</A></li>
            </Ul>
        </Nav>
    )
}
