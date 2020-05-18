import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
`
const H1 = styled.h1`
    font-family: 'Permanent Marker', cursive;
    font-size: 30px;
    text-shadow: 2px 2px 4px #00ff00;
`
const Ul = styled.ul`
    display: flex;
    justify-content: spaced-evenly;
    align-items: center;
`

const Li = styled.li`
    padding: 1rem 2rem;
    transition: 350ms;

    &:hover{
        box-shadow: 0 4px 6px black;
        cursor: pointer;
    }
`

const A = styled.a`
    font-family: 'Sentury Gothic', san-serif;
    font-size: 14px;
    font-weight: bold;
    color: black;
    text-shadow: 1px 1px 3px #00ff00;
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
