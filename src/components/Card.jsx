import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Container = styled.div`
    width: 360px;
    margin-bottom: 15px;
    display: "flex";
    gap: 10px;
    `;
const Image = styled.img`
    width: 100%;
    height: 300px;
    background-color: #999999;
    flex:1;
    `;
const Details = styled.div`
    display: flex;
    gap:12px;
    flex:1;
    `;
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
    border:1px solid #6107f1;
    background-color: rgba(255, 11, 247, 0.253);
    border-radius: 5px;
    padding-top: 3px;
    text-align: center;
    height: 30px;
    width:120px;
    cursor: pointer;
    `;

const Card = (props) => {
    const [count, setCount] = useState(0);
    const Add = () => {
        let m= props.keyId
        var data = JSON.parse(localStorage.getItem(m));
        let q = data.slice(0,1);
        q = q - 1 + 1;
        q= q+1;
        var n123 = []
        n123[0]=q;
        let qe=data.slice(1,2);
        qe = qe -1 + 1;
        n123[1]=qe;
        localStorage.setItem(m,JSON.stringify(n123));
        setCount(count + 1);
    }
    const Remove = () => {
        let m= props.keyId
        var data = JSON.parse(localStorage.getItem(m));
        let q = data.slice(0,1);
        q= q-1;
        var n123 = []
        n123[0]=q;
        let qe=data.slice(1,2);
        qe = qe -1 + 1;
        n123[1]=qe;
        localStorage.setItem(m,JSON.stringify(n123));
        setCount(count - 1);
    }
    return (
        <Container>
            {props.keyId}
            <Image src={props.img} />
            <Title>{props.name}</Title>  
            <Title>Rs :  {props.rate}</Title>
            <Details>
                {count > 0 ?  (

                    <Texts>
                        <ChannelName onClick={Add}>Add To Cart</ChannelName>
                        <ChannelName>{count}</ChannelName>
                        <ChannelName onClick={Remove}>Remove</ChannelName>
                    </Texts>
                ) : (

                    <Texts>
                        <ChannelName onClick={Add}>Add To Cart</ChannelName>
                    </Texts>
                )}
            </Details>
        </Container>

    )

}

export default Card