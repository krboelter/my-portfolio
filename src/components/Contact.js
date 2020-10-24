import React, { useState } from 'react'
import styled from 'styled-components'

export default function Contact() {
    const [newEmail, setNewEmail] = useState({
        subject: "",
        body: ""
    })

    const handleChange = (e) => {
        const value = e.target.value
        setNewEmail({
            ...newEmail,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {

    }

    return (
        <Container>
            <h2>CONTACT</h2>
            <Form
                action="mailto:krboelter@gmail.com"
                method="get"
                enctype="text/plain"
            >
                <InputSubject
                    name="subject"
                    type="text"
                    value={newEmail.subject}
                    placeholder="Subject"
                    onChange={handleChange}
                />
                <InputBody
                    name="body"
                    type="text"
                    value={newEmail.body}
                    placeholder="Body"
                    onChange={handleChange}
                />
            <Button>Submit</Button>
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
    border: 2px solid darkgray;
    border-raidus: 8px;
    width: 100%;
    height: 35px;
    font-size: 20px;
`

const InputBody = styled.textarea`
    margin: 10px 0;
    background-color: gray;
    border: 2px solid darkgray;
    border-raidus: 8px;
    width: 100%;
    height: 300px;
    font-size: 20px;
`

const Button = styled.button`
    color: gray;
    background-color: black;
    border: none;
    width: 25%;
    padding: 14px 20px;
    margin: 15px auto;
    border-radius: 2px;
    font-size: 18px;
    font-weight: bold;
    transition: 400ms;
    cursor: pointer;

    &:hover {
        color: white;
        box-shadow: 0 4px 6px #00ff00;
    }
`

const Div = styled.div`
    color: white;
`

const Email = styled.a`
    color: lime;
`
