import React from 'react'
import { useContext } from 'react';
import { Context } from '../Context/ContextApi';


const Todos = () => {
    const { arr } = useContext(Context)
    
    return (
        <div>
            {arr.map((item: any, idx: number) => {
                return (
                    <div key={idx}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.date}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos