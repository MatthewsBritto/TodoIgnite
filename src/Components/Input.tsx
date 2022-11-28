import React from 'react';

import styles from './Input.module.css';

export function Input() {
  return ( 

         <div className={styles.container}> 
            <textarea name="" className={styles.textArea}/>
            <button className={styles.newBtn}>
               Criar
               +
            </button>
         </div>
);
}

