import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    height: 75px;
    width: 100%;
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
    display: flex;
    justify-content: spaced-evenly;
    align-items: center;
`

const Li = styled.li`
    padding: 1.5rem 3rem;
    transition: 350ms;

    &:hover{
        box-shadow: 0 4px 6px black;
        cursor: pointer;
    }
`

const A = styled.a`
    font-family: 'Special Elite', cursive;
    font-size: 22px;
    font-weight: bold;
    color: #00ff00;
    text-shadow: 2px 2px 4px black;
    text-decoration: none;
`

export default function Navigation() {
    return (
        <Nav>
            <H1>Ken Boelter</H1>
            <Ul>
                <Li><A href="#">PROJECTS</A></Li>
                <Li><A href="#">ABOUT</A></Li>
                <Li><A href="#">RESUME</A></Li>
            </Ul>
        </Nav>
    )
}
