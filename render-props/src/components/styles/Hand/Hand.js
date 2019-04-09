import styled from 'styled-components';

const Face = styled.div`
  width: ${p => (p.type === 'seconds' ? 2 : 5)}px;
  height: ${p => (p.type ? 40 : 20)}px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(${p => p.value}deg);
`
export default Face;