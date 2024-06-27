"use client"

import { useEffect, useState } from "react";
import products from "@/constants/products";
import Product from "@/components/product";
import { FlexRowContainer, FlexColumnContainer, PageButton } from "@/components/common/styles";

const Home = () => {
  const [currentProducts, setCurrentProducts] = useState(products)
  const [comparisonProducts, setComparisonProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(products.length / 10)

  useEffect(() => {
    const comparisonArr = localStorage.getItem(`comparison`)
    if (comparisonArr) {
      setComparisonProducts(JSON.parse(comparisonArr))
    }
    const cartArr = localStorage.getItem(`cart`)
    if (cartArr) {
      setCartProducts(JSON.parse(cartArr))
    }
  }, [])

  useEffect(() => {
    setCurrentProducts(products.slice(page * 10, page * 10 + 10))
  }, [page])
  return (
    <FlexColumnContainer>
      <FlexRowContainer style={{ maxWidth: 1245, flexWrap: `wrap`, justifyContent: `center`, gap: 10, marginTop: 50 }}>
        {currentProducts.map((product) => (
          <Product 
          key={`product-${product.id}`}
            product={product}
            comparisonProducts={comparisonProducts}
            setComparisonProducts={setComparisonProducts}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          >
            {product.name}
          </Product>
        ))}
      </FlexRowContainer>
      <FlexRowContainer style={{ justifyContent: `center`, gap: 10, marginTop: 20 }}>
        {Array.from(Array(totalPages).keys()).map((pageNumber) => <PageButton key={`page-${pageNumber}`} $active={pageNumber === page} onClick={() => setPage(pageNumber)}>{pageNumber + 1} </PageButton>)}
      </FlexRowContainer>
    </FlexColumnContainer>
  );
}

export default Home