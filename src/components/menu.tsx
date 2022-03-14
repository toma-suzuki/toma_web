import React from 'react';
import { gsap } from 'gsap';

export const Menu = (props: { isOpenedTitle: boolean }) => {
  const showMenu = () => {
    gsap.to('.top-page-menu', { opacity: 1 });
  };

  if (props.isOpenedTitle) {
    showMenu();
  }
  return (
    <div className={'top-page-menu'}>
      <p>MENU</p>
    </div>
  );
};

export default Menu;