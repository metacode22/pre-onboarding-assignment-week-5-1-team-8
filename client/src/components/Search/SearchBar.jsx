/* eslint-disable */

import { useRef } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import palette from '../../styles/palette';
import { getRecommends } from '../../lib/apis/search';

function SearchBar() {
  const inputRef = useRef();
  
  const handleSearch = async event => {
    event.preventDefault();
    
    const recommends = await getRecommends(inputRef.current.value)
    
  };

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
  border: 4px solid blue;
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
  height: 100%;
  border: 1px solid black;
  border-radius: 16px;
  padding-left: 1em;
`;
