import { useState,ChangeEvent,MouseEvent, useEffect  } from 'react';

import { Header }  from './Components/Header';
import { Item }  from './Components/Item';
import {PlusCircle} from 'phosphor-react'

import logoEmpty from './assets/Clipboard.png'
import styles from "./App.module.css";
import './global.css';
import Container from './Components/Container';

import axios from 'axios';

export interface todoProps {

  taskId: string,
  title:string,
  description:string,
  completed_at: string | null,
  created_at: string,
  update_at:  string | null
}



function App() {
  
  const [todoItems,setTodoItems] = useState<todoProps[]>([]);
  
  const [newTodoText, setNewTodoText] = useState('');

  const [itemsChecked, setItemsChecked] = useState(0);

  function fetchTaskData () {
      axios.get('//localhost:3001/tasks')
       .then(res =>  setTodoItems(res.data) )
       .catch(err => console.log(err))

       
  }



  
  const counterItems = todoItems.length;

  useEffect( () => {
    fetchTaskData()
  },[])

  useEffect( () => {
    howItensChecked()
  },[todoItems])


  function handleNewText(event:ChangeEvent<HTMLTextAreaElement>){
    //pegar texto input
    setNewTodoText(event.target.value);
  }

  function handleCreateNewTodo(event:MouseEvent){

    // setar nova tarefa  

    const newTodo = {
      title: newTodoText,
      description:newTodoText
    }

    event.preventDefault();
    axios.post('//localhost:3001/tasks', JSON.stringify(newTodo))
    .then(res => fetchTaskData())
    .then(res => setNewTodoText(''))
    .catch(err => console.log(err))
    
  }

  function onDeleteItem(id:string) {
    
      axios.delete(`//localhost:3001/tasks/${id}`)
      .then( res => fetchTaskData())
      .catch(err => console.log(err))
   
  }

  function onCheckItem (itsDone:boolean,id:string) { 

    // receber a lista primeiro e alterar a mesma dentro da função

    // const localTodoItems = [...todoItems]
    // const checkedTodoItemsIndex = todoItems.findIndex(item => { return item.taskId === id })
    // if(checkedTodoItemsIndex < 0) return;

    
    // setTodoItems(localTodoItems)
    
    axios.patch(`//localhost:3001/tasks/${id}/complete`)
    .then( res => fetchTaskData())
    .catch(err => console.log(err))
    
    
  }
  function howItensChecked(){

    const newListCheckeditems = 
    todoItems.filter(item => {return item.completed_at ? true : false})

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
                  key={item.taskId}
                  id={item.taskId}
                  content={item.description}
                  finished={item.completed_at ? true : false}
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
