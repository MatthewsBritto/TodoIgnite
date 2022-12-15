import React, { useState , MouseEvent, MouseEventHandler,useEffect} from 'react';
import {Trash,Check} from 'phosphor-react'

import styles from './Item.module.css'

interface itemProps{
  content:string;
  id:string;
  onDeleteItem: (id:string) => void;
  onCheckItem: (finished:boolean,id:string) => void;
  finished: boolean;
  
}


export function Item({content,onDeleteItem,id,finished, onCheckItem}:itemProps){
  

  function handleDeleteItem() {
    // setItsFinished(false);
    onDeleteItem(id);

  }

  function handleCheckItem(itsDone:boolean,id:string) {
    // setItsFinished(!itsDone);
    onCheckItem(!itsDone,id);
  }


  return (
      <div className={styles.item} key={id}>
        <button 
          className={finished ?  styles.checkNo  : styles.check }
          onClick={(event:any) => handleCheckItem(finished,id)}

        >
          {finished ? <Check weight={'bold'}/>  : '' }

        </button>
        <p 
          className={finished ? styles.textFinished : styles.text}>
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

