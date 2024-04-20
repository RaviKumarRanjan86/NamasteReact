import React, { useCallback, useState } from 'react'
import Title from './Title'
import MyButton from './MyButton'
import Count from './Count'

export default function UseCallbackHook() {
    console.log('main compontn')

    const [count, setCount] = useState(0);
    const [salary, setSalary] = useState(5000)

    const increaseCount = useCallback(() => {
        setCount(count+1);
    }, [count])

    const increaseSalary = useCallback(() => {
        setSalary(salary+500)
    },[salary])

  
    return (
        <div>
            <Title>UseCallbackHook</Title>
            <MyButton handleClick={increaseCount} text='increaseCount'>increase Count</MyButton>
            <Count  text='increaseCount' count={count}/>
            <MyButton handleClick={increaseSalary} text='increaseSalary'>increase salary</MyButton>
            <Count text='increaseSalary' count={salary}/>
        </div>

    )
}
