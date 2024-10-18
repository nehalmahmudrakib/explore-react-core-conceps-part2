import { useState } from "react"

export default function Team (){
    
    const [count, setCount] = useState(11)

    const addHandle = () => {
        const newCount = count +1
        setCount(newCount)
    }

    const removeHandle = () => {
        const newCount = count -1
        setCount(newCount)
    }

    const style ={
        border:'2px solid pink',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }


    return (
        <div style={style}>
            <h2>Player: {count}</h2>
            <button onClick={addHandle}>Add</button>
            <button onClick={removeHandle}>Remove</button>
        </div>
    )
}