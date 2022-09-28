import styled from 'styled-components';
import { HEADER_PARAGRAPH } from '../../lib';

function Header() {
  return <Wrap>{HEADER_PARAGRAPH}</Wrap>;
}

export default Header;

const Wrap = styled.header`
  margin-bottom: 1em;
`;
