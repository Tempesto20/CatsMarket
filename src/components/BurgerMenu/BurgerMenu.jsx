import React, {Fragment} from 'react';
import NavState from '../../context/navState';
import MainMenu from './MainMenu';

function BurgerMenu() {
  return (
    <Fragment>
    <NavState>
      <MainMenu />
    </NavState>
    </Fragment>
  )
}

export default BurgerMenu;