import React from 'react';
import styles from './List.module.css';
import logoEmpty from '../assets/Clipboard.png';
import { Item } from './Item';

export function List(){
  return(
      <section className={styles.container}>
            <header className={styles.types}>
               <a>    
                    Tarefas Criadas
                  <span className={styles.counter}>0</span>
               </a> 
               <a> 
                        Concluídas 
                  <span className={styles.counter}>0</span>
               </a>
            </header>

            <div className={styles.listContainer}> 
               {/* <img className={styles.logoEmpty} src={logoEmpty}/>
                  <p>
                     <span className={styles.bold}>
                        Você ainda não tem tarefas cadastradas
                     </span> 
                     <br/>
                     Crie tarefas e organize seus itens a fazer   
                  </p> */}

                  <Item />

            </div>
      </section>
  ) ;
}

