import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const Container = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
    height: 90vh;
    color:#000000;
    `;
const Wrapper = styled.div`
    width: 500px;
    display:flex;
    align-items: center;
    flex-direction: column;
    background-color:#f8ffb8;
    border: 1px solid #000000;
    padding: 20px 50px;
    gap: 10px;
`;
const Title = styled.h1`
    font-size: 30px;
`;
const SubTitle = styled.h2`
    font-weight: 300;
    font-size: 20px;
    margin-top: -10px;
`;
const Input = styled.input`
    border:1px solid #000000;
    color:#000000;
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
`;
const Button = styled.button`
    border-radius: 8px;
    border:none;
    padding: 10px 20px;
    font-weight: 500;
    font-size: 20px;
    width: 150px;
    cursor: pointer;
    background-color:#c19eff;
    color:#000000;
`;
const More = styled.div`
    display:flex;
    font-size: 12px;
    color:#000000;
    margin-top: 10px;
`;
const Links = styled.div`
    margin-left: 50px;
    `;
const Link = styled.span`
    margin-left: 30px;
`;

const SignIn = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            navigate("/")
        } catch (err) {
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>Sign in </Title>
                <SubTitle>to Continue @ Fillix</SubTitle>
                <Input placeholder='Username' onChange={e => setName(e.target.value)} />
                <Input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Sign in</Button>
                <Title>or</Title>
                <Input placeholder='Username' onChange={e => setName(e.target.value)} />
                <Input placeholder='Email' onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <Button>Sign up</Button>
            </Wrapper>
        </Container>
    )
}

export default SignIn