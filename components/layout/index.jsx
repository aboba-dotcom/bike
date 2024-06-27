"use client"
import React, { FC } from 'react';
import Header from '../header';
import Footer from '../footer';
import { Container, ContentContainer } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Container>
  )
}

export default Layout;