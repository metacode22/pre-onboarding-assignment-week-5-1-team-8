import { useSelector } from 'react-redux';
import styled from 'styled-components';
import palette from '../../styles/palette';

function SearchRecommendItem({ sickName }) {
  const enteredText = useSelector(state => state.enteredText);
  const regExp = new RegExp(enteredText, 'g');
  const sickNameBolded = sickName.replaceAll(regExp, `<b>${enteredText}</b>`)
  
  
  return <Wrap dangerouslySetInnerHTML={{ __html: sickNameBolded }}></Wrap>;
}

export default SearchRecommendItem;

const Wrap = styled.li`
  margin-bottom: 1em;
  
  b {
    font-weight: bold;
    color: ${palette.black}
  }
`;
