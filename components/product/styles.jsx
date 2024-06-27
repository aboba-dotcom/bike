import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 200px;
  height: 250px;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 8px;
  align-self: flex-end;

  img {
    transform: scale(70%);
  }
`;

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  align-self: flex-end;
  margin-top: -10px;

  &:hover {
    button {
      background-color: ${(props) => props.$isSelected ? '#083d5f' : '#ecb012'};
    }
  }
  
  button {
    background-color: unset;
    min-width: 35px;
    height: 35px;
  }
`;

export const ProductName = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 600;
  width: 200px;
  padding: 0 15px;
  margin-bottom: 1px;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ProductInfo = styled.div`
  min-width: 0px;
  padding: 0 15px;
  margin-top: auto;
  height: 100px;

  &:hover {
    .hover-price {
      display: block;
    }
  }
`;

export const ProductAvailability = styled.span`
  padding: 0 15px;
  font-size: 14px;
  color: ${(props) => props?.$inStock ? 'green' : 'red'};
`;

export const PriceContainer = styled.div`
  font-size: 14px;
`;
