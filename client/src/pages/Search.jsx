import styled from 'styled-components';
import { SearchBar, SearchRecommendList } from '../components';

function Search() {
  return (
    <Wrap>
      <SearchBar />
      <SearchRecommendList />
    </Wrap>
  );
}

export default Search;

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
