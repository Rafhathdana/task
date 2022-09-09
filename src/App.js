import styled from "styled-components";
import Main from "./components/Main";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
const Container = styled.div``;
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </Container >
  );
}

export default App;
