import styled from "styled-components"

const Gtitle = styled.div`
margin-top: 20px;
font-size: 25px;
font-weight: 500;
width:200px;
`
const Conatiner = styled.div`
display:flex;
flex-direction: column;
margin:40px 20px;
`
const Rate = styled.div`
display: flex;
`

const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    width:200px;
`;
const ChannelName = styled.div`
    font-size: 25x;
    font-weight: 500;
    border:none;
    background-color: rgb(255, 8, 8);
    border-radius: 10px;
    padding-top: 10px;
    text-align: center;
    height: 40px;
    width:220px;
    cursor: "pointer";
    margin:  30px auto;
    align-items: center;
    justify-content: center;
    `;
export const RateBox = () => {

    return (
        <Conatiner >
            <Rate>
                <Title>Total Cost </Title>
                <Title>: Rs.2000</Title>

            </Rate>
            <Rate>
                <Title>Delivery Charge</Title>
                <Title>: Rs.200</Title>
            </Rate>
            <Rate>
                <Title>Gst Charge</Title>
                <Title>: Rs.20</Title>
            </Rate>
            <Rate>
                <Gtitle>Grand Total</Gtitle>
                <Gtitle>: Rs.2220</Gtitle>
            </Rate>
            <ChannelName>Checkout</ChannelName>
        </Conatiner >

    )
}