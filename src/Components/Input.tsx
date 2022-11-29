import React from 'react';

import styles from './Input.module.css';

export function Input() {
  return ( 

         <div className={styles.container}> 
            <textarea placeholder='Adicione uma nova tarefa'
                className={styles.textArea}
            />
            <button className={styles.newBtn}>
               Criar
               +
            </button>
         </div>
);
}

