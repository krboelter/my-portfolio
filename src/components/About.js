import React from 'react'
import styled from 'styled-components'
import picture from '../images/Me_and_Dee.jpg'

export default function About() {
    return (
		<FlexContainer>
            <div id='about'></div>
        	<h2>ABOUT ME</h2>
            <BodySection>
                <Portrait src={picture}/>
            	<DesContainer>
                	<H3>KEN BOELTER</H3>
        			<Description>I started in construction, but switched to programming and haven't looked back. I always have a few projects in the works and enjoy
    	            learning new languages and frameworks.
        			</Description>
                    <Description>I enjoy spending time with my family. My wife and I have a baby girl with another one on the way. We currently live in Utah while I
                         search for a job.
                    </Description>
                    <Description>In my free time I like to work on my game development skills using the Godot game engine.
                    </Description>
    			</DesContainer>
            </BodySection>
		</FlexContainer>
    )
}

const FlexContainer = styled.div`
	display: flex;
    flex-direction: column;
`

const Portrait = styled.img`
    align-self: center;
    position: relative;
    width: 300px;
    height: 410px;
    border-radius: 50%;
    box-shadow: 0 0 10px black;
`

const BodySection = styled.div`
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const DesContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
`

const H3 = styled.h3`
    color: white;
    width: 100%;
    margin-top: 30px;
    font-size: 35px;
    font-family: "Noto Sans", sans-serif;
    font-weight: bold;
    text-shadow: 2px 2px 4px #00ff00;
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
