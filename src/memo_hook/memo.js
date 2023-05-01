import React, { useMemo, useState } from "react";


const MemoHook = () =>{ 
     const [count , setCount] = useState(0)
     const [todos, setTodos] = useState([])
     const calculation = useMemo(()=> expensiveCalculation(count),[count])

}

const expensiveCalculation=(num)=>{
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
}