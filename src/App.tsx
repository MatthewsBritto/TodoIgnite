import { useState } from 'react';

import { Header }  from './Components/Header';
import { Input }  from './Components/Input';
import {List} from './Components/List';


import styles from "./App.module.css";
import './global.css';

function App() {

  return (
    <div className={styles.App}>
      
      <Header/>
      <Input/>
      <List/>
    </div>
  )
}

export default App
