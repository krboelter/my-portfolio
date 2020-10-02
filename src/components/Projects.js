import React from 'react'
import styled from 'styled-components'

export default function Projects() {
    return (
        <Container>
			<FlexContainer>
            	<H2>PROJECTS</H2>
            	<Content>
                    <Div>
					    <iframe src="https://www.savethisjob.com/" title="Save This Job" width="600px" height="350"></iframe>
                    </Div>
            	</Content>
			</FlexContainer>
        </Container>
    )
}

const Container = styled.div`
	display: block;
	float: right;
    margin-top: 6rem;
	margin-right: 10rem;
    width: 950px;
    height: 500px;
    border-radius: 5px;
    background-image: linear-gradient(to left, black, 85%, rgba(0, 0, 0, 0));
`

const FlexContainer = styled.div`
	display: flex;
    flex-direction: column;
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
    justify-content: center;
    margin: 0 10%;
	color: white;
`

const Div = styled.div`
    box-shadow: 0 0 20px lime;
`
