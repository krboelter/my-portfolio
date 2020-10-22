import React from 'react'
import styled from 'styled-components'

export default function Contact() {
    return (
        <Container>
            <h2>CONTACT</h2>
            <Div>Email: <Email href="mailto:krboelter@gmail.com? subject=Job Opportunity">krboelter@gmail.com</Email></Div>
        </Container>
    )
}

const Container = styled.div`
	display: block;
	float; left;
    border-radius: 5px;
    background-image: linear-gradient(to right, black, 85%, rgba(0, 0, 0, 0));
`

const Div = styled.div`
    color: white;
`

const Email = styled.a`
    color: lime;
`
