import React from 'react'
import styled from 'styled-components'

export default function Projects() {
    return (
        <Container>
			<FlexContainer>
            	<h2>PROJECTS</h2>
            	<Content>
                    <Div>
					    <iframe src="https://www.savethisjob.com/" title="Save This Job" width="700px" height="500"></iframe>
                    </Div>
            	</Content>
			</FlexContainer>
        </Container>
    )
}

const Container = styled.div`
	display: block;
	float: right;
    width: 100%;
    border-radius: 5px;
`

const FlexContainer = styled.div`
	display: flex;
    flex-direction: column;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 10%;
	color: white;
`

const Div = styled.div`
    margin-top: 40px;
    box-shadow: 0 0 16px lime;
`
