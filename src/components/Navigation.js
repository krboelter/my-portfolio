import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <Nav>
            <H3>Ken Boelter</H3>
            <Ul>
                <Li><Link to="/about">ABOUT</Link></Li>
                <Li><Link to="/projects">PROJECTS</Link></Li>
                <Li><Link to="/contact">CONTACT</Link></Li>
                <Li><Link to="/resume">RESUME</Link></Li>
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
    text-shadow: 2px 2px 4px darkgray;
    text-decoration: underline;
`
const Ul = styled.ul`
    margin: 0 30px;
    align-items: center;
    display: flex;
    display-flex: space-between;
`

const Li = styled.li`
    padding: 0.8rem 2rem;
    transition: 400ms;

    &:hover{
        box-shadow: 0 4px 6px #00ff00;
        cursor: pointer;
    }
`
