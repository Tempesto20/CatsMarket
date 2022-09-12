import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';

const Navbar = styled.div`

{/* ФОН для кнопки от которого можно избавиться*/}

`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <HamburgerButton />
        {/*<h1>Фон для кнопки</h1>*/}
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;