import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const todoItem ='Написать новое приложение';

const App = () => {
    const items =[
        {
          value:'write my own styles',
          isDone: true
        },
        {
          value: 'finish 26 lesson',
          isDone: true
        },
        {
          value: 'start a new lesson',
          isDone: false
        }
    ]
  return(

  <div className={styles.wrap}>
      <h1 className={styles.title}>TO-DO LIST </h1>
      <InputItem />
      <ItemList items = {items} />
      <Footer count ={3} />
  </div>);
  }

export default App;
