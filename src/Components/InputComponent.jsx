import React, { useState } from 'react';
import './style/InputComponent.css';

const InputComponent = ({ addTodoData }) => {
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const handleSubmit = () => {
        addTodoData(title, description)
        setTitle('')
        setdescription('')
    }
    return (
        <div>


            {/* <h1>Input Comp</h1> */}

            <div classNameName='container'>
                <center>
                    <h3>My todo</h3>
                    <input type='text' value={title} placeholder='todoname' onChange={e => setTitle(e.target.value)} />
                    <input type='text' value={description} placeholder='todo discription' onChange={e => setdescription(e.target.value)} />
                    <button onClick={handleSubmit}>Add Todo</button>
                </center>
                <div>
                    <p className='head'><b>My Todos</b></p>
                    </div>
                    <div className='dropdown'>
                    Status Filter:<select>
                    <option><a class="dropdown-item" href="#"></a>All</option>
                    <option><a class="dropdown-item" href="#">completed</a></option>
                    <option><a class="dropdown-item" href="#">pending</a></option>
                    </select>
                    </div>
                    
                    </div>


                </div>
            











    );
};

export default InputComponent;