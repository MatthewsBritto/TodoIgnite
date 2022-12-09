import { useState,ChangeEvent,MouseEvent  } from 'react';

import { Header }  from './Components/Header';
import { Item }  from './Components/Item';


import logoEmpty from './assets/Clipboard.png'
import styles from "./App.module.css";
import './global.css';
import Container from './Components/Container';

export interface todoProps {

  content:string;
  id:string;
  finished:boolean;
}



function App() {
  
  const [todoItems,setTodoItems] = useState<todoProps[]>([]);
  
  const [newTodoText, setNewTodoText] = useState<todoProps>({}as todoProps);

  const [itemsChecked, setItemsChecked] = useState(0);
  
  const counterItems = todoItems.length;



  function handleNewText(event:ChangeEvent<HTMLTextAreaElement>){
    //pegar texto input
    setNewTodoText(event.target.value);
  }
  function handleGetNewTodoText(event:MouseEvent, {content, id, finished}:todoProps){
    // setar nova tarefa  
    event.preventDefault();
    setTodoItems([...todoItems,newTodoText]);
    setNewTodoText({} as todoProps)
  }
  function onDeleteItem(ItemToDelete:string){

    const newListitems = todoItems.filter(
      item => {return item !== ItemToDelete})

      setTodoItems(newListitems)

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
               >
               Criar
               +
            </button>
      </div>  

      <section className={styles.listContainer}>
            <header className={styles.types}>
               <a>    
                  Tarefas Criadas
                  <span className={styles.counter}>
                    {counterItems}
                  </span>
               </a> 
               <a> 
                  Concluídas 
                  <span className={styles.counter}>
                    {itemsChecked}
                  </span>
               </a>
            </header>


          {todoItems.length === 0 ? (

              <Container hasItems={false} > 
                        
                        <img className={styles.logoEmpty} src={logoEmpty}/>
                        <p>
                          <span className={styles.bold}>
                            Você ainda não tem tarefas cadastradas
                          </span> 
                          <br/>
                          Crie tarefas e organize seus itens a fazer   
                      </p>
              </Container>
          ) : (

            <Container hasItems={true}> 

              {todoItems.map(item => {
                return (
                <Item 
                  key={item.content}
                  content={item.content}
                  onDeleteItem={onDeleteItem}
                />
                )
              })}

            </Container>
          )}
      </section>
    </div>

  )
}

export default App
