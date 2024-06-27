"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import products from "@/constants/products";
import { FlexColumnContainer, FlexRowContainer } from "@/components/common/styles";
import { Cell } from "@/app/comparison/styles";
import { Button } from '@/styles/common';
import { BsFillCartPlusFill } from "react-icons/bs";

const Page = ({ params: { id } }) => {
  const [currentProduct, setCurrentProduct] = useState(products.find((product) => product.partNumber === id))

  useEffect(() => {
    setCurrentProduct(products.find((product) => product.partNumber === id))
  }, [])
  return !currentProduct ? null : (

    <FlexRowContainer>
      <Image
        style={{ alignSelf: 'flex-start' }}
        height={300}
        width={400}
        src={`/products/${currentProduct.id}.png`}
        alt="product-image" 
        key="product-image"
      />
      <FlexColumnContainer style={{ justifyContent: "center", alignItems: "center" }}>
        <FlexRowContainer>
          <FlexColumnContainer>
            <Cell first key="product-name"> Найменування товару </Cell>
            <Cell key="product-manufacturer"> Виробник </Cell>
            <Cell key="product-price"> Ціна </Cell>
            <Cell key="product-rate"> Рейтинг </Cell>
            <Cell key="product-wheelRadius"> Радіус колес </Cell>
            <Cell key="product-weight"> Вага </Cell>
          </FlexColumnContainer>
          <FlexColumnContainer>
            <Cell first key="product-name-value"> {currentProduct.name} </Cell>
            <Cell key="product-manufacturer-value" > {currentProduct.manufacturer} </Cell>
            <Cell key="product-price-value"> {currentProduct.price} </Cell>
            <Cell key="product-rate-value"> {currentProduct.rate} </Cell>
            <Cell key="product-wheelRadius-value"> {currentProduct.wheelRadius} </Cell>
            <Cell key="product-weight-value"> {currentProduct.weight} </Cell>
          </FlexColumnContainer>
        </FlexRowContainer>
        <Button style={{ backgroundColor: `rgb(25, 25, 230)` }}>
          <FlexRowContainer style={{ justifyContent: "center", alignItems: "center", gap: 10, padding: `10px`, width: 500 }}>
            <BsFillCartPlusFill color="white" size={25} />
            Додати в кошик
          </FlexRowContainer>
        </Button>
      </FlexColumnContainer>
    </FlexRowContainer>
  );
}

export default Page 
