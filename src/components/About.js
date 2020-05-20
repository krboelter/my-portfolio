import React from 'react'
import styled from 'styled-components'
import picture from '../images/Me_and_Dee.jpg'

export default function About() {
    return (
        <Container>
            <H2>ABOUT ME</H2>
            <Content>
                <Portrate src={picture}/>
                <DesContainer>
                    <H1>KEN BOELTER</H1>
		            <Description>I started in construction, but switched to programming and haven't looked back. I always have a few projects in the works and enjoy
			            learning new languages and frameworks.
		            </Description>
		        </DesContainer>
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
    color: darkgray;
    font-family: "Noto Sans", sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-shadow: 1px 1px 2px gray;
    margin-bottom: 35px;
    margin-top: 16px;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2.5rem 10%;
`

const Portrate = styled.img`
    width: 200px;
    height: 270px;
    border-radius: 50%;
    box-shadow: 0 0 10px gray;
`

const DesContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35px;
`

const H1 = styled.h1`
    color: white;
    width: 100%;
    font-family: 'Special Elite', cursive;
    font-size: 45px;
    text-shadow: 2px 2px 4px #00ff00;
    text-decoration: underline;
    text-align: left;
`

const Description = styled.p`
    color: lightgray;
    width: 100%;
    font-family: 'Noto Sans', sans-serif;
    text-align: left;
`

