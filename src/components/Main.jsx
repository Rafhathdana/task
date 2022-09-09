import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
const Container = styled.div`
    display: flex;
    background-color: #53f8d4c8;
    height:100px;
    margin:auto;
    width:100%;
`
const Head = styled.div`
margin-top:15px;
font-size: 50px;
top:50%;
padding: 0px 15px 15px 15px;
color: #ff33d3f1;
background-color: #d5f9ffa4;
text-align: center;
height: 50px;
margin-left: 100px;
border:1px solid #000000;
border-radius: 20%;
`
const Right = styled.div`
margin:auto 50px auto auto;
display: flex;
justify-content: space-between;
`
const Login = styled.div`
background-color: #fdb8b8;
border-radius: 5px;
width:90px;
font-size: 20px;
color:#ff0000;
border:1px solid #000000;
cursor: pointer;
text-align: center;
margin-left: 30px;
`

const Main = () => {
    return (
        <Container>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Head>
                    Fillix
                </Head>
            </Link>
            <Right>

                <Link to="/cart" style={{ textDecoration: "none" }}><Login >Cart</Login></Link>
                <Link to="/signin" style={{ textDecoration: "none" }}><Login>Login</Login></Link>
            </Right>
        </Container>

    )
}

export default Main