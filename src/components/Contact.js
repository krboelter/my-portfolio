import React from 'react'
import styled from 'styled-components'

export default function Contact() {
    return (
        <Container>
            <p>Email: krboelter@gmail.com</p>
        </Container>
    )
}

const Container = styled.div`
	display: block;
	float; left;
    width: 950px;
    height: 500px;
	margin-left: 10rem;
    border-radius: 5px;
    background-image: linear-gradient(to right, black, 85%, rgba(0, 0, 0, 0));
`
