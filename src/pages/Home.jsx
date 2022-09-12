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
    var n123 = []
    n123[0]=0;
    n123[1]=1500;
    localStorage.setItem('n123',JSON.stringify(n123));
sessionStorage.setItem('124','0,1800');
sessionStorage.setItem('125','0,1550');
sessionStorage.setItem('126','0,280');
sessionStorage.setItem('127','0,5300');
sessionStorage.setItem('128','0,1200');
sessionStorage.setItem('129','0,4500');
sessionStorage.setItem('130','0,3500');
    return (
        <Container>
            <Card name="Design saree" img={pic1} rate="1500" keyId="n123"/>
            <Card name="Grey Tshirt" img={pic2} rate="1800" keyId="124"/>
            <Card name="ziper Tshirt" img={pic3} rate="1550" keyId="125"/>
            <Card name="line shirt" img={pic4} rate="280" keyId="126"/>
            <Card name="selwar" img={pic5} rate="5300" keyId="127"/>
            <Card name="black salwar" img={pic6} rate="1200" keyId="128"/>
            <Card name="qw salwas" img={pic7} rate="4500" keyId="129"/>
            <Card name="zainab saree" img={pic8} rate="3500" keyId="130"/>
        </Container>
    );
}

export default Home;