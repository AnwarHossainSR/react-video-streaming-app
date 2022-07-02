import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
