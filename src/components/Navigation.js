import React from 'react'
import styled from 'styled-components'

export default function Navigation() {
    return (
        <Nav>
            margin-top: 100px;
            <H3>Ken Boelter</H3>
            <Ul>
                <Li><A href="#">PROJECTS</A></Li>
                <Li><A href="#">ABOUT</A></Li>
                <Li><A href="#">RESUME</A></Li>
            </Ul>
        </Nav>
    )
}

const Nav = styled.div`
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    opacity: 0.7;
    box-shadow: 0 0 8px #00ff00;
    position: fixed;
	top: 0;
`
const H3 = styled.h3`
    margin: 0 30px;
    font-family: 'Special Elite', cursive;
    font-size: 25px;
    color: white;
    text-shadow: 2px 2px 4px #00ff00;
    text-decoration: underline;
    position: fixed;
`
const Ul = styled.ul`
    margin: 0 30px;
    display: flex;
    justify-content: spaced-evenly;
    align-items: center;
    position: relative;
`

const Li = styled.li`
    padding: 0.8rem 2rem;
    transition: 400ms;

    &:hover{
        box-shadow: 0 4px 6px #00ff00;
        cursor: pointer;
    }
`

const A = styled.a`
    font-family: 'Noto Sans', san-serif;
    font-size: 14px;
    font-weight: bold;
    color: lightgray;
    text-shadow: 1px 1px 3px #00ff00;
    text-decoration: none;
`
