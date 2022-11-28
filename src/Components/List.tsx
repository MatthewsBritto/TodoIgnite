import React from 'react';
import styles from './List.module.css';
import logoEmpty from '../assets/Clipboard.png'

export function List(){
  return(
      <section className={styles.container}>
         <header className={styles.types}>
            <ul>
               <li>Tarefas criadas <span>0</span></li>
               <li>Concluidas <span>0</span></li>
            </ul>   
         </header>

         <div className={styles.listContainer}> 
               <img className={styles.logoEmpty} src={logoEmpty}/>
               <p>
                     Você ainda não tem tarefas cadastradas    
               </p> 
               <p>
                     Crie tarefas e organize seus itens a fazer
               </p>        
         </div>
      </section>
  ) ;
}

