import React from 'react';
import './style/TodosList.css';

const TodosList = ({ item, index, deletetodoItem,filteredTodos }) => {
  return (
    <div>
      <div class="col-md-4">
        <div class="box-part">
          <div key={index}>
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
                <div className='down'>
                Status:<select className='sel'>
                     <option>completed</option>
                     <option>Not completed</option>
              </select>
                </div>
              
                <button className='bt2'>edit</button>
                <button className='bt1' onClick={() => { deletetodoItem(item.id) }}>delete</button>
               
                

            </div>

          </div>

        </div>
      </div>













  );
};

export default TodosList;