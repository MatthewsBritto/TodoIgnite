import React from 'react';
import {Trash} from 'phosphor-react'

import styles from './Item.module.css'

interface itemProps{
  content:string;
  onDeleteItem: (item:string) => void;
}

export function Item({content,onDeleteItem}:itemProps){

  function handleDeleteItem(){
    onDeleteItem(content)
  }

  return (
      <div className={styles.item}>
        <div className={styles.check}></div>
        <p className={styles.text}>
          {content}
        </p>
        <button 
        className={styles.delItem}
        onClick={handleDeleteItem}
        >
          <Trash size={18}/>
        </button>
      </div>
   
  );
}

