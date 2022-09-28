import styled from 'styled-components';
import { SearchBar } from '../components';
import { SearchRecommend } from '../components';

function Search() {
  return (
    <Wrap>
      <SearchBar />
      <SearchRecommend />
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
