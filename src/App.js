import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Search from './pages/Search';
import { HOME_PAGE } from './lib';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_PAGE} element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
