import React, { useState , MouseEvent, MouseEventHandler} from 'react';
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

  const [ itsFinished, setItsFinished] = useState(finished);
  

  function handleDeleteItem() {
    onDeleteItem(id)
  }

  function handleCheckItem(itsDone:boolean,id:string) {
    setItsFinished(!itsDone);
    onCheckItem(!itsDone,id);
  }

  return (
      <div className={styles.item} key={id}>
        <button 
          className={itsFinished ?  styles.checkNo  : styles.check }
          onClick={(event:any) => handleCheckItem(itsFinished,id)}

        >
          {itsFinished ? <Check weight={'bold'}/>  : '' }

        </button>
        <p 
          className={itsFinished ? styles.textFinished : styles.text}>
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

