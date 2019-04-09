import styled from 'styled-components';

const Value = styled.div`
  font-size: ${p => (p.small ? 2 : 3)}rem;
  line-height: ${p => (p.small ? 2 : 3)}rem;
  text-transform: uppercase;
  text-align: center;
  opacity: ${p => (p.opaque ? 0.5 : 1)};
`
export default Value;