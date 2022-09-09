import styled from "styled-components";
import Card from "../components/Card";

import pic1 from "../img/11.png"
import pic8 from "../img/10.png"
import pic7 from "../img/12.png"
import pic6 from "../img/13.png"
import pic5 from "../img/18.png"
import pic4 from "../img/15.png"
import pic3 from "../img/16.png"
import pic2 from "../img/17.png"
const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items:right;
margin:40px;
`
function Home() {
    return (


        <Container>
            <Card name="Design saree" img={pic1} rate="1500"/>
            <Card name="Grey Tshirt" img={pic2} rate="1800"/>
            <Card name="ziper Tshirt" img={pic3} rate="1550"/>
            <Card name="line shirt" img={pic4} rate="280"/>
            <Card name="selwar" img={pic5} rate="5300"/>
            <Card name="black salwar" img={pic6} rate="1200"/>
            <Card name="qw salwas" img={pic7} rate="4500"/>
            <Card name="zainab saree" img={pic8} rate="3500"/>

        </Container>
    );
}

export default Home;