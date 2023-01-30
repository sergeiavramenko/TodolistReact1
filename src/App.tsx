import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist } from './Todolist';

function App() {
  let titl1 = [
    {ip:1222},
    {ip:12}
  ]

  let tasks1 = [
    {id: 1,    title: "CSS",  isDone: true},
    {id: 2,    title: "JS",  isDone: true},
    {id: 3,    title: "React",  isDone: false}
  ]
  let tasks2 = [
    {id: 1,    title: "Term",  isDone: true},
    {id: 2,    title: "XXS",  isDone: false},
    {id: 3,    title: "Jentlments of fortune",  isDone: false}
  ]
  return (
    <div className='App'>
      <Todolist tit={titl1} tasks={tasks1} />
      <Todolist tit={titl1} tasks={tasks2} />
     
     
    
      
    </div>
  );
}

export default App;
