import styled from "styled-components";

export const Cell = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  border-top: 1px solid #282D33;
  display: flex;
height: 50px;
${(props)=>props.$first && `
  background-color: rgba(0,0,0, .1);
  margin-top: 50px;
  `}
`;