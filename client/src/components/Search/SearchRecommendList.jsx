import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NONE_RECOMMENDED_SEARCH_TERM, RECOMMENDED_SEARCH_TERM } from '../../lib';
import palette from '../../styles/palette';
import SearchRecommendItem from './SearchRecommendItem';

function SearchRecommendList() {
  const recommends = useSelector(state => state.recommends);
  console.info(recommends);

  return (
    <Wrap>
      <p>{RECOMMENDED_SEARCH_TERM}</p>
      {recommends.length ? (
        <ul>
          {recommends.map(recommend => (
            <SearchRecommendItem key={recommend.sickCd} sickName={recommend.sickNm} />
          ))}
        </ul>
      ) : (
        <p>{NONE_RECOMMENDED_SEARCH_TERM}</p>
      )}
    </Wrap>
  );
}

export default SearchRecommendList;

const Wrap = styled.div`
  margin-top: 1em;
  width: 100%;
  border: 2px solid ${palette.gray};
  border-radius: 16px;
  padding: 1em;

  p {
    color: ${palette.gray};
    margin-bottom: 1em;
  }
  
  ul {
    color: ${palette.gray};
  }
`;
