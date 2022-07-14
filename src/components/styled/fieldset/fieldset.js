import styled from 'styled-components';

const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  margin-bottom: ${(props)=>props.$margin||0}px;
`;

export default Fieldset;