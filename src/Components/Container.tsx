import React, { HtmlHTMLAttributes } from 'react';

import styles from './Container.module.css';

interface containerProps extends HtmlHTMLAttributes<Boolean>{
   hasItems?:boolean;
}

export default function({hasItems= true}:containerProps){
  return (
  <div className={hasItems ? styles.itemsContainerSp : styles.itemsContainer}> 

  </div>);
}
