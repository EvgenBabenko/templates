import styled from 'styled-components';

import { clip } from '../mixins';

const Strap = styled.div`
  clip-path: ${clip};
  height: 300px;
  overflow: hidden;
  position: relative;
  width: 100px;
`
export default Strap;