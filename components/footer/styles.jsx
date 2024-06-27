import { ResponsiveContainer } from "@/components/common/styles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 0;
  background-color: #ecb012;
  border-top: 1px solid #282D33;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  color: #000000;
  @media (max-width: 719px) {
    padding: 25px 0;
  }
`;


export const CopyRightLabel = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  font-size: 13px;
  color: #083d5f;
`;

export const FooterContentContainer = styled(ResponsiveContainer)`
  display: flex;
  padding-top: 15px;
  padding-bottom: 50px;

  @media (max-width: 719px) {
    flex-direction: column-reverse;
    padding-top: 0px;
    padding-bottom: 20px;
    justify-content: center;
  }
`;

export const FlexHalf = styled.div`
  flex: 1;

  @media (max-width: 719px) {
    margin: 10px 0;
    display: flex;
    justify-content: center;
  }
`;

export const FooterMenuContainer = styled(FlexHalf)`
  display: flex;
  justify-content: space-between;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkGroupLabel = styled.span`
  color: #000000;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
`;

export const MenuLink = styled.a`
  color: #083d5f;
  font-size: 15px;
  margin: 7px 0;
  display: flex;
  align-items: center;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
      color: #7A76FF;
  }
`;

export const LogoContainer = styled.div`
  width: 150px;
  opacity: 0.8;
  margin-bottom: 5px;

  @media (max-width: 719px) {
    display: none;
  }
`;

export const EmailLabel = styled.a`
  color: #083d5f;
  transition: all 0.2s ease 0s;

  &:hover {
    color: #7A76FF;
  }

  @media (max-width: 719px) {
    display: none;
  }
`;