import { useState,ChangeEvent,MouseEvent, useEffect  } from 'react';

import { Header }  from './Components/Header';
import { Item }  from './Components/Item';
import {PlusCircle} from 'phosphor-react'

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

  useEffect(()=>{
    howItensChecked()
    
  },[todoItems])


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
  function onCheckItem (itsDone:boolean,id:string) { 

    // receber a lista primeiro e alterar a mesma dentro da função

    const localTodoItems = [...todoItems]
    const checkedTodoItemsIndex = todoItems.findIndex(item => {return item.id === id})
    if(checkedTodoItemsIndex < 0) return;

    localTodoItems[checkedTodoItemsIndex].finished = itsDone;

    setTodoItems(localTodoItems)
    
  
  }
  function howItensChecked(){

    const newListCheckeditems = 
    todoItems.filter(item => {return item.finished === true})

    setItemsChecked(newListCheckeditems.length)
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
               <h4>Criar</h4>
               <PlusCircle size={26}/>
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

                  {itemsChecked === 0 ? (
                    <span className={styles.counter}>

                    {itemsChecked}
                    
                  </span>
                  ):
                  (<span className={styles.counter}>

                    {itemsChecked} de {counterItems}
                    
                  </span>)}
                  
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
