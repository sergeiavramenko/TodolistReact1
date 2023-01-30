import React from "react";

// function sum(a: number, b: number) {
//     alert (a + b);
// }
// sum(12, 8);
type Bebby = {
    ip: number
}
type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type PropsTyp = {
    tit: Array<Bebby>
    tasks: Array<TaskType>
}

export function Todolist(props: PropsTyp) {
    return (
      <div>
        <h3>{props.tit[1].ip}</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li> 
          <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li> 
          <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li> 
        </ul>
        <div>
          <button>all</button>
          <button>active</button>
          <button>Completed</button>
        </div>
      </div>
  
    );
  }