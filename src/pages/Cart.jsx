import React, { useEffect , useState } from 'react'
import styled from 'styled-components'
import CartBox from '../components/CartBox'

import pic5 from "../img/18.png"
import pic4 from "../img/15.png"
import pic3 from "../img/16.png"
import { RateBox } from '../components/RateBox'
const Container = styled.div`
`
const Box = styled.div`
    margin:auto;
    border:1px solid #0f0f0f;
`
const Heading = styled.h2`
 font-weight: 500;
 font-size: 25px;
 margin: 30px 30px;
 text-align: center;
`
const Main= styled.div`
display: flex;
`
const Cart = () => {
    // const [data,newData] = useState(null);
    // useEffect(() => {
    //     fetch(`http://testinginterview.rf.gd/task5.php`)
    //     .then((response) => response.text())
    //     .then((response) => newData(response));
    // },[]);
    let m= localStorage.getItem('n123');
    console.log(m)
    return (
        <Container>
            <Heading>Cart</Heading>
            <Heading></Heading><Main>

                <Box>
                    <CartBox name="ziper Tshirt" img={pic3} rate="1550" quantity="1" />
                    <CartBox name="line shirt" img={pic4} rate="280" quantity="4" />
                    <CartBox name="selwar" img={pic5} rate="5300" quantity="2" />
                </Box>
                <Box>
                    <RateBox/>
                </Box>
            </Main>
        </Container>
    )
}

export default Cart;