import React, { useState } from 'react'
import styled from 'styled-components'

export default function Contact() {
    const [newEmail, setNewEmail] = useState({
        subject: "",
        body: ""
    })

    return (
        <Container>
            <h2>CONTACT</h2>
            <Div>Email: <Email href="mailto:krboelter@gmail.com? subject=Job Opportunity">krboelter@gmail.com</Email></Div>
            <Form>
                <InputSubject
                    name="subject"
                    type="text"
                    value={newEmail.subject}
                    placeholder="Subject"
                />
                <InputBody
                    name="body"
                    type="textarea"
                    value={newEmail.body}
                    placeholder="Body"
                />
            </Form>
        </Container>
    )
}

const Container = styled.div`
	display: block;
	float; left;
    border-radius: 5px;
    background-image: linear-gradient(to right, black, 85%, rgba(0, 0, 0, 0));
`

const Form = styled.form`
    display: flex;
    width: 50%;
    flex-direction: column;
    margin: 25px auto;
`

const InputSubject = styled.input`
    margin: 10px 0;
    background-color: gray;
    width: 100%;
    height: 35px;
    font-size: 20px;
`

const InputBody = styled.input`
    margin: 10px 0;
    background-color: gray;
    width: 100%;
    height: 300px;
    font-size: 20px;
    color: black;
`

const Div = styled.div`
    color: white;
`

const Email = styled.a`
    color: lime;
`
