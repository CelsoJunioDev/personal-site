import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const projectColors = {
  navColor: '#000',
}

export const Nav = styled.nav`
  background: ${projectColors.navColor};
  height: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position:sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 16px;
`

export const NavLogo = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-left: 4px;
  cursor: pointer;

  &:hover {
    color: #a4d2ff;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  align-items: center;
  justify-self: flex-end;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkScroll)`
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid white;
  }

  &:hover {
    color: #a4d2ff;
  }
`

