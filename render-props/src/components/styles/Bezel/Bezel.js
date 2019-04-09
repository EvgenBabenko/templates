import styled from 'styled-components';

import { clip } from '../mixins'

const Bezel = styled.div`
  background: silver;
  height: 60%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  clip-path: ${clip};
  width: 102%;
`
export default Bezel;