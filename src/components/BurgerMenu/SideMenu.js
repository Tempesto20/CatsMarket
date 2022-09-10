import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from '../../context/navState';
import logoSvg from '../../img/svg/logo.svg';

import '../../scss/components/header.scss';
//выскакивающее меню 

const Menu = styled.nav`
  
{/* выскакивающее меню */}
overflow: auto;
  position: absolute;
  top: 0px;
  left: 0px;
  //bottom: 0px;
  z-index: 5;
  display: block;
  width: 100%;
  hight: 100%;
  //width: 400px;
  max-width: 100%;
  max-hight: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 0px;
  
  //align-items: stretch;
  //background-color: #001698;
  background-color: black;
  //background: black;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.open &&
    css`
    //background: black;
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`

{/* контент выскакивающего меню */}
overflow: auto;
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  hight: 100%;

  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  
  //background-position: 88% 50%;
  background-size: 36px;
  //background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  //line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <Fragment>
      <MenuLink href="/" ><img src={logoSvg} alt="" className="header__logo-1" /></MenuLink>
      <MenuLink href="/">Main</MenuLink>
      <MenuLink href="/articles">Gallery</MenuLink>
      <MenuLink href="/about">News</MenuLink>
      <MenuLink href="https://tempesto20.github.io/Summary.github.io-/" target="_blanc">Profile</MenuLink>
    </Fragment>
  ),
};