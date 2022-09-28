import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

function Layout() {
  return (
    <Wrap>
      <Header />
      <SearchWrap>
        <Outlet />
      </SearchWrap>
    </Wrap>
  );
}

export default Layout;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchWrap = styled.main`
  width: 640px;
  height: 360px;
  border: 2px solid red;
`;
