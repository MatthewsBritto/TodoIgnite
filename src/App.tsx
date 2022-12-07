import React,{ useState,ChangeEvent,MouseEvent } from 'react';

import { Header }  from './Components/Header';
import { Item }  from './Components/Item';



import styles from "./App.module.css";
import './global.css';

export interface todoProps {

  content:string;
  id:string;
  finished:boolean;
}



function App() {
  
  const [todoItems,setTodoItems] = useState<string[]>([]);
  
  const [newTodoText, setNewTodoText] = useState('');
  


  function handleNewText(event:ChangeEvent<HTMLTextAreaElement>){
    //pegar nova tarefa
    setNewTodoText(event.target.value);
  }
  function handleGetNewTodoText(event:MouseEvent){
    // setar nova tarefa
    event.preventDefault();

    setTodoItems([...todoItems,newTodoText]);
    console.log(todoItems);

    setNewTodoText('');
  }



  return (

    <div className={styles.App}>
      
      <Header/>



      <div className={styles.container}> 
            <textarea 
               placeholder='Adicione uma nova tarefa...'
               onChange={handleNewText}
               className={styles.textArea}
               value={newTodoText}
            />
            <button 
               className={styles.newBtn}
               onClick={handleGetNewTodoText}
               type='submit'
               >
               Criar
               +
            </button>
      </div>  

      <section className={styles.listContainer}>
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

            <div className={styles.itemsContainer}> 
               {/* <img className={styles.logoEmpty} src={logoEmpty}/>
                  <p>
                     <span className={styles.bold}>
                        Você ainda não tem tarefas cadastradas
                     </span> 
                     <br/>
                     Crie tarefas e organize seus itens a fazer   
                  </p> */}
              <Item/>


            </div>
      </section>
    </div>

  )
}

export default App
