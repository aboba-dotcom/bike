"use client"
import Image from "next/image";
import { Divider, FlexColumnContainer, FlexRowContainer } from "@/components/common/styles"
import { Cell } from "../comparison/styles";
import products from "@/constants/products";
import { useCallback, useEffect, useState } from "react";
import EmptyPage from "@/components/emptyPage";
import { Button, Input } from "@/styles/common";
import Link from "next/link";

const Page = () => {
  const [cartProducts, setCartProducts] = useState([])
  const [isOrderCompleted, toggleOrderCompleted] = useState(false)

  const handleOrderConfirmation = useCallback(() => {
    localStorage.removeItem(`cart`);
    toggleOrderCompleted(true);
  }, [])

  useEffect(() => {
    const partNumbers = localStorage.getItem(`cart`)
    if (partNumbers) setCartProducts(products.filter((product) => JSON.parse(partNumbers).includes(product.partNumber)))
  }, [])

  const OrderCompletedPage = () => (
    <FlexColumnContainer style={{ margin: '50px 0', justifyContent: "center", alignItems: "center" }}>
      <p style={{ fontSize: 30, color: 'rgba(0,0,0,.6)', fontWeight: 600 }}>Thank you</p>
      <p style={{ fontSize: 20, fontWeight: 600, marginTop: 25 }}>We will contact you ASAP</p>

      <Link href="/"><Button style={{ marginTop: 20, width: 300 }}>Back to catalog</Button></Link>
    </FlexColumnContainer>
  )

  if (isOrderCompleted) return <OrderCompletedPage />

  return !cartProducts.length ? <EmptyPage /> : (
    <FlexColumnContainer style={{ margin: '50px 0', justifyContent: "center", alignItems: "center" }}>
      <p style={{ fontSize: 30, fontWeight: 600, color: 'rgba(0,0,0,.6)', alignSelf: 'flex-start' }}>Your order</p>
      <Divider />
      <FlexColumnContainer style={{ marginTop: 50 }}>
        {cartProducts.map((product) => (
          <>
            <FlexRowContainer>
              <Image
                style={{ alignSelf: 'flex-start', transform: "scale(70%)" }}
                height={80}
                width={110}
                src={`/products/${product.id}.png`}
                alt="product-image"
              />
              <Cell style={{ border: 'none' }}> {product.name} </Cell>
            </FlexRowContainer>
            <Divider />
          </>
        ))}
      </FlexColumnContainer>

      <p style={{ marginTop: 80, fontSize: 30, color: 'rgba(0,0,0,.6)', fontWeight: 600, alignSelf: 'flex-start' }}>Contact info</p>
       <Divider />
      <Input style={{ marginTop: 30, width: 1200 }} placeholder="Name" />
      <Input style={{ marginTop: 30, width: 1200 }} placeholder="Phone number" />

      <Button style={{ marginTop: 30, width: 800 }} onClick={handleOrderConfirmation}>Confirm order</Button>
    </FlexColumnContainer>
  );
}

export default Page 