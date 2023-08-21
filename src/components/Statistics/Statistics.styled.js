import styled from 'styled-components';

export const StatWrap = styled.section`
  width: 300px;
  display: flex;
  border: 1px solid black;
  border-radius: 4px;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 4px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.color === 'true' ? 'green' : 'red')};
  margin-right: 10px;
`;
