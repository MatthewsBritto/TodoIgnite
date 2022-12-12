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
  
  const [newTodoText, setNewTodoText] = useState('');

  const [itemsChecked, setItemsChecked] = useState(0);
  
  const counterItems = todoItems.length;



  function handleNewText(event:ChangeEvent<HTMLTextAreaElement>){
    //pegar texto input
    setNewTodoText(event.target.value);
  }
  function handleCreateNewTodo(event:MouseEvent){

    // setar nova tarefa  

    const newTodo = {
      content: newTodoText,
      id:newTodoText,
      finished:false
    }

    event.preventDefault();
    setTodoItems([...todoItems,newTodo]);
    setNewTodoText('')
  }
  function onDeleteItem(id:string){

    const newListitems = todoItems.filter(
      item => {return item.id !== id})

      setTodoItems(newListitems);

  }
  function onCheckItem (finished:boolean) {
    const itemChecked = !finished  

    console.log(itemsChecked);
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
               onClick={handleCreateNewTodo}
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
                  id={item.id}
                  content={item.content}
                  finished={item.finished}
                  onDeleteItem={onDeleteItem}
                  onCheckItem={onCheckItem}
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
