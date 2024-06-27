"use client"
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';
import { Container, Content, LogoContainer, MenuContainer, MenuItem } from './styles';
import { FlexRowContainer } from 'components/common/styles';
import { Button } from '@/styles/common';
import { HiScale } from 'react-icons/hi';
import { IoCart } from "react-icons/io5";

const Header = () => {

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Link href="/">
            <Image
              style={{ transform: 'scale(50%)' }}
              src={logo}
              alt="Ukraine"
            />
          </Link>

        </LogoContainer>
      </Content>
      <MenuContainer>
        <FlexRowContainer style={{ justifyContent: 'flex-start' }}>
          <Link href="/about">
            <MenuItem>Про нас</MenuItem>
          </Link>
          <Link href="/policy">
            <MenuItem>Політика конфіденційності</MenuItem>
          </Link>
          <Link href="/shipping">
            <MenuItem>Оплата | Доставка</MenuItem>
          </Link>
        </FlexRowContainer>
        <FlexRowContainer style={{ justifyContent: 'flex-end', gap: 10 }}>
          <Link href="/cart">
            <Button>
              <IoCart size={30} color="#083d5f" />
            </Button>
          </Link>
          <Link href="/comparison">
            <Button>
              <HiScale size={30} color="#083d5f" />
            </Button>
          </Link>
        </FlexRowContainer>
      </MenuContainer>
    </Container>
  )
}

export default Header;