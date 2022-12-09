import  { DOMAttributes} from 'react';

import styles from './Container.module.css';

interface ContainerProps extends DOMAttributes<HTMLElement> {
  hasItems: boolean;
}


export default function({hasItems, children}:ContainerProps){
  return (
  <div 
    className={hasItems ? styles.itemsContainerSp : styles.itemsContainer}> 

    {children}

  </div>);
}
