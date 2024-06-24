import React, { useEffect, useState } from 'react';

const LifeCycle = () => {
    const[value, setValue]=useState(0);
    useEffect(()=>{
        console.log("mounting")

        return()=>{
            console.log("unmounting phase")
        }
    },[value])
    return (
        <div>
            <h1>Life Cycle</h1>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(value+1)}}>Click</button>
        </div>
    );
};

export default LifeCycle;