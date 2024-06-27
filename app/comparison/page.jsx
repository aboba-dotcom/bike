"use client"
import Image from "next/image";
import { FlexColumnContainer, FlexRowContainer } from "@/components/common/styles"
import { Cell } from "./styles";
import products from "@/constants/products";
import { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const Page = () => {
  const [comparisonProducts, setComparisonProducts] = useState([])
  useEffect(() => {
    const partNumbers = localStorage.getItem(`comparison`)
    if (partNumbers) setComparisonProducts(products.filter((product) => JSON.parse(partNumbers).includes(product.partNumber)))
  }, [])

  const removeItem = useCallback((id) => {
    setComparisonProducts(comparisonProducts.filter((product) => product.id !== id))
  }, [comparisonProducts, setComparisonProducts])
  return (
    <FlexColumnContainer>

      <FlexRowContainer>
        <FlexColumnContainer style={{ marginTop: 100 }}>
          <Cell $first key="product-name"> Найменування товару </Cell>
          <Cell key="product-manufacturer"> Виробник </Cell>
          <Cell key="product-price"> Ціна </Cell>
          <Cell key="product-rate"> Рейтинг </Cell>
          <Cell key="product-wheelRadius"> Радіус колес </Cell>
          <Cell key="product-weight"> Вага </Cell>
        </FlexColumnContainer>

        {comparisonProducts.map((product) => (
          <FlexColumnContainer>
            <IoClose onClick={() => removeItem(product.id)} size={20} style={{ position: 'absolute', marginRight: -120, marginTop: 25 }} />
            <Image
              style={{ alignSelf: 'flex-start', transform: "scale(70%)", marginBottom: -50, paddingLeft: 20 }}
              height={150}
              width={200}
              src={`/products/${product.id}.png`}
              alt="product-image"
            />
            <Cell $first key="product-name-value"> {product.name} </Cell>
            <Cell key="product-manufacturer-value" > {product.manufacturer} </Cell>
            <Cell key="product-price-value"> {product.price} </Cell>
            <Cell key="product-rate-value"> {product.rate} </Cell>
            <Cell key="product-wheelRadius-value"> {product.wheelRadius} </Cell>
            <Cell key="product-weight-value"> {product.weight} </Cell>
          </FlexColumnContainer>
        ))}

      </FlexRowContainer>
    </FlexColumnContainer>
  );
}

export default Page 