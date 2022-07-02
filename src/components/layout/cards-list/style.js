import styled from 'styled-components';

const StyledList = styled.ul`
  margin: 0 0 24px;
  padding: 0;
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const StyledItem = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;
  flex: 0 0 353px;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export {StyledList, StyledItem };