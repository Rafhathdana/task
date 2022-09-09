import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
 justify-content: center;
  align-items: center;
  display: flex;
`
const Image = styled.img`
height:100px;
width:100px;
border-radius: 7px;
margin: 0px 20px;
`
const TotalRate = styled.button`
    cursor:none;
    height:30px;
    width:150px;
    align-items: center;
    margin: 10px 20px;
    background-color: #9fbdff;
    color:#000000;
    font-size:20px;
    font-weight:500;
    border:none;
    padding: 5px 10px;
    margin-left:auto;
    `
const Main = styled.div`
display:flex;
flex-direction: column;
margin:auto;
`

const Texts = styled.div`
display:flex;
margin: auto;
`;
const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
`;
const ChannelName = styled.div`
    font-size: 15x;
    font-weight: 500;
    border:none;
    background-color: rgba(255, 8, 8, 0.678);
    border-radius: 5px;
    padding-top: 3px;
    text-align: center;
    height: 30px;
    width:120px;
    cursor: ${(props) => props.type === "count" && "pointer"};
    margin: 10px;
    `;
const CartBox = (props) => {
    const [count, setCount] = useState(props.quantity - 1 + 1);
    const [total, setTotal] = useState(props.quantity * props.rate);
    const Add = () => {
        setCount(count + 1);
        setTotal(props.rate * count);
    }
    const Remove = () => {
        setCount(count - 1);
        setTotal(props.rate * count);
    }
    return (
        <Container >
            <Image alt="image" src={props.img} />
            <Main>
                <Title>{props.name}</Title>
                <Title>Rs : {props.rate}</Title>
                {count > 0 ? (
                    <Texts>
                        <ChannelName type="count" onClick={Add}>Add Item</ChannelName>
                        <ChannelName >{count}</ChannelName>
                        <ChannelName type="count" onClick={Remove}>Remove Item</ChannelName>
                    </Texts>
                ) : (

                    <Texts>
                        <ChannelName onClick={Add}>Add To Cart</ChannelName>
                    </Texts>
                )}
            </Main>
            {count > 0 ? (
                <TotalRate>{total}</TotalRate>
            ) : (<TotalRate>0</TotalRate>
            )}
        </Container>
    )
}

export default CartBox

