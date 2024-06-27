"use client"
import {
  Container,
  CopyRightLabel,
  FooterContentContainer,
  FlexHalf,
  FooterMenuContainer,
  FlexColumn,
  LinkGroupLabel,
  MenuLink,
  LogoContainer,
  EmailLabel
} from './styles';

const Footer = () => {
  return (
    <Container>
      <FooterContentContainer>
        <FlexHalf>
          <LogoContainer>
            {/* <Image
                src={logoWhite}
                alt="SpaceSerp"
            /> */}
          </LogoContainer>
          <EmailLabel href="mailto:support.ukraine@catalog.com">support.ukraine@catalog.com</EmailLabel>
        </FlexHalf>
        <FooterMenuContainer>
          <FlexColumn>
            <LinkGroupLabel>Умови конфіденційності</LinkGroupLabel>
            <MenuLink href='/terms-of-use'>Умови користування</MenuLink>
            <MenuLink href='/privacy'>Політика конфіденційності</MenuLink>
          </FlexColumn>
          <FlexColumn>
            <LinkGroupLabel>Підтримка</LinkGroupLabel>
            <MenuLink href='/about'>Про нас</MenuLink>
          </FlexColumn>
        </FooterMenuContainer>
      </FooterContentContainer>
      <CopyRightLabel>
        <p>Курсова робота студента групи Кнз-21</p>
        <p>Вознюка Івана</p>
        <p>Сайт не є комерційним. Усі матеріали були взяті із відкритих джерел.</p>
        </CopyRightLabel>
    </Container>
  )
}

export default Footer;