import Link from "next/link";
import { ButtonContainer, PriceContainer, ProductAvailability, ProductContainer, ProductInfo, ProductName } from "./styles";
import Image from "next/image";
import { FlexRowContainer } from "components/common/styles";
import { Button } from '@/styles/common';
import { HiScale } from 'react-icons/hi';
import { IoCart } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";

const Product = ({ product, comparisonProducts, setComparisonProducts, cartProducts, setCartProducts }) => {
  const isSelected = comparisonProducts.includes(product.partNumber);
  const isInCart = cartProducts.includes(product.partNumber);


  const hendleCBtnClick = (action, partNumber) => {
    const comparisonArr = localStorage.getItem(action)
    if (!comparisonArr) {
      localStorage.setItem(action, JSON.stringify([partNumber]))
      if (action === 'comparison') setComparisonProducts([partNumber]);
      else setCartProducts([partNumber]);
    }
    else {
      const parsedComparison = JSON.parse(comparisonArr)
      if (parsedComparison.find((part) => part === partNumber)) {
        const newValue = parsedComparison.filter((part) => part !== partNumber);
        localStorage.setItem(action, JSON.stringify(newValue))
        if (action === 'comparison') setComparisonProducts(newValue);
        else setCartProducts(newValue);
      }
      else {
        const newValue = [...parsedComparison, partNumber];
        localStorage.setItem(action, JSON.stringify(newValue));
        if (action === 'comparison') setComparisonProducts(newValue);
        else setCartProducts(newValue);
      }
    }
  }

  return (
    <Link href={`/product/${product.partNumber}`}>
      <ProductContainer>
        <Image
          style={{ alignSelf: 'flex-start' }}
          height={150}
          width={200}
          src={`/products/${product.id}.png`}
          alt="product-image"
        />
        <ProductInfo>
          <ProductName>{product.partNumber} - {product.manufacturer}</ProductName>
          <ProductAvailability $inStock={!!product.count}>{product.count ? 'In stock' : 'Out of stock'}</ProductAvailability>
          <FlexRowContainer style={{ padding: '3px 15px 0px 15px' }}>
            <PriceContainer key={`${product.partNumber}_price`} style={{ display: 'flex' }}>{product.price}</PriceContainer>
            <FlexRowContainer style={{ justifyContent: 'flex-end' }}>
              <ButtonContainer $isSelected={isInCart}>
                {isInCart ? (
                  <Button onClick={(e) => {
                    e.preventDefault()
                    hendleCBtnClick("cart", product.partNumber)
                  }}>
                    <BsCartCheckFill size={20} color={isInCart ? '#ecb012' : "#083d5f"} />
                  </Button>
                ) : (
                  <Button onClick={(e) => {
                    e.preventDefault()
                    hendleCBtnClick("cart", product.partNumber)
                  }}>
                    <IoCart size={20} color={isInCart ? '#ecb012' : "#083d5f"} />
                  </Button>
                )}
              </ButtonContainer>
              <ButtonContainer $isSelected={isSelected}>
                <Button onClick={(e) => {
                  e.preventDefault()
                  hendleCBtnClick("comparison", product.partNumber)
                }}>
                  <HiScale size={20} color={isSelected ? '#ecb012' : "#083d5f"} />
                </Button>
              </ButtonContainer>
            </FlexRowContainer>
          </FlexRowContainer>
        </ProductInfo>
      </ProductContainer>
    </Link>
  )
}
export default Product;
