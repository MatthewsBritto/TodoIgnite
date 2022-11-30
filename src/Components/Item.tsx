import React from 'react';
import {Trash} from 'phosphor-react'

import styles from './Item.module.css'

export function Item(){
  return (
      <div className={styles.item}>
        <div className={styles.check}></div>
        <p className={styles.text}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
        <button>
          <Trash size={24}/>
        </button>
      </div>
   
  );
}

