import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import palette from '../../styles/palette';
import { getCache, getRecommends, setCache } from '../../lib';
import { setRecommends } from '../../store/recommends';
import { setEnteredText } from '../../store/enteredText';

const DEBOUNCE_TIME = 250;

function SearchBar() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  // todo: 이걸 어떻게 추상화하지...? custom hook?
  let timer;
  const handleSearch = async event => {
    event.preventDefault();
    const enteredText = inputRef.current.value;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(async () => {
      let currentRecommends = getCache(enteredText);

      if (!currentRecommends) {
        currentRecommends = await getRecommends(enteredText);
        dispatch(setRecommends(currentRecommends));
        setCache(enteredText, currentRecommends);
      }

      dispatch(setRecommends(currentRecommends));
      dispatch(setEnteredText(enteredText));
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Wrap>
      <Form onSubmit={event => handleSearch(event)}>
        <Input ref={inputRef} placeholder="검색어를 입력해주세요." onChange={event => handleSearch(event)} />
        <FaSearch />
      </Form>
    </Wrap>
  );
}

export default SearchBar;

const Wrap = styled.div`
  width: 100%;
  height: 3em;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  position: relative;

  & > * {
    color: ${palette.gray};
    position: absolute;
    right: 1em;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 2em;
  border: 2px solid ${palette.gray};
  border-radius: 16px;
  padding-left: 1em;
`;
