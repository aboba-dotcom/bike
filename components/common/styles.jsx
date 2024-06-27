import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: #ecb012;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.2;
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0;
  }
`;
export const FlexColumnContainer = styled.div`
width: 100%;
max-width: 1200px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`;

export const FlexRowContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #282D33;
  margin: 20px 0;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResponsiveContainer = styled.div`
  width: 1200px;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const PrivacyContainer = styled.div`
  margin: 20px 0;
  p, li {
    color: #A2AAB8;
    margin: 10px 0;
  }

  h2 {
    color: white;
  }

  a {
    color: #593cca
  }
`;

export const PageButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center; 
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: white;
  color: black;
  ${(props)=> props.$active && `
    background-color: blue;
    color: white; 
    `}
`;