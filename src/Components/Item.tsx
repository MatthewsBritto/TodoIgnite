import React, { useState , MouseEvent, MouseEventHandler} from 'react';
import {Trash,Check} from 'phosphor-react'

import styles from './Item.module.css'

interface itemProps{
  content:string;
  key:string;
  onDeleteItem: (item:string) => void;
  
}


export function Item({content,onDeleteItem,key}:itemProps){

  const [itsFinished,setItsFinished] = useState(false);

  function handleDeleteItem() {
    onDeleteItem(content)
  }

  function handleCheckItem(itsFinished:boolean){
    setItsFinished(!itsFinished);
  }

  return (
      <div className={styles.item} key={key}>
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

