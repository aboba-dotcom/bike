import styled from "styled-components";
import { ResponsiveContainer } from '@/components/common/styles';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    background-color: #1919e6;
`;

export const Content = styled(ResponsiveContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoContainer = styled.div`
margin: -90px 0;
    cursor: pointer;
`;

export const MenuContainer = styled.ul`
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    li {
      font-weight: 600;
    }

    li:hover {
        border: 1px solid #1919e6;
        border-radius: 8px;
        padding: 8px 10px;
        background-color: #ecb012;
        font-size: 20px;
    }

    a > li {
      &:hover {
        color: #083d5f;
      }
    }
`;

export const MenuItem = styled.li`
text-wrap: nowrap;
    list-style-type: none;
    margin: 0 15px;
    cursor: pointer;
    color: white;
    letter-spacing: 0.7px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease 0s;
    &:hover {
        color: #7A76FF;
    }
`;

export const Menu = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: #0c0c0c;
    z-index: 1000;
`;
