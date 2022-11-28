import React from 'react';

import logoImg from '../assets/logo.png'
import styles from './Header.module.css'

export function Header (){
  return(

      <header>
         <img 
            className={styles.logo}
            src={logoImg}
            />
      </header>
);
}