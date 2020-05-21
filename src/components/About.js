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
                    <H3>KEN BOELTER</H3>
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
    margin-left: 35px;
`

const H3 = styled.h3`
    color: #00cc18;
    width: 100%;
    margin-top: 30px;
    font-size: 35px;
    font-family: "Noto Sans", sans-serif;
    font-weight: bold;
    text-shadow: 2px 2px 4px darkgray;
    text-align: left;
`

const Description = styled.p`
    color: lightgray;
    width: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    text-align: left;
    margin-top: 30px;
`

