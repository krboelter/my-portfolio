import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

export default function Projects() {
    return (
        <Container>
			<FlexContainer>
            	<h2>PROJECTS</h2>
            	<Content>
                    <Div>
					    <iframe src="https://www.savethisjob.com/" title="Save This Job" width="700px" height="500"></iframe>
                    </Div>

                    <div>
                        <section>See more at Github and LinkedIn</section>
                        <br />
                        <a href="https://github.com/krboelter" target="_blank"><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/in/ken-boelter" target="_blank"><LinkedInIcon /></a>
                    </div>
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
    flex-direction: column;
    justify-content: center;
    margin: 0 10%;
	color: white;
`

const Div = styled.div`
    margin: 40px auto;
    box-shadow: 0 0 16px lime;
`
