import { useRef } from 'react';
import styled from 'styled-components';

function SearchBar() {
  const inputRef = useRef();
  
  return (
    <Wrap>
      <Form>
        <Input ref={inputRef}/>
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
