import React, { useState , MouseEvent, MouseEventHandler} from 'react';
import {Trash,Check} from 'phosphor-react'

import styles from './Item.module.css'

interface itemProps{
  content:string;
  id:string;
  onDeleteItem: (id:string) => void;
  onCheckItem: (finished:boolean) => void;
  finished: boolean;
  
}


export function Item({content,onDeleteItem,id,finished, onCheckItem}:itemProps){

  const [ itsFinished, setItsFinished] = useState(finished);
  

  function handleDeleteItem() {
    onDeleteItem(id)
  }

  function handleCheckItem(finished:boolean){
    setItsFinished(!finished)
  }

  return (
      <div className={styles.item} key={id}>
        <button 
          className={itsFinished ?  styles.checkNo  : styles.check }
          onClick={(event:any) => handleCheckItem(itsFinished)}

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

