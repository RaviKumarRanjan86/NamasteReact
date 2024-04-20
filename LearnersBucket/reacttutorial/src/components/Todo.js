import React from 'react'
import { useState } from 'react'

export default function Todo() {

    const [data,setData] = useState([{
        id: 1,
        title: 'MyCurrentTask',
        status: 'Active'
    }])

    const [inputVal, setInputVal] = useState('')

    const onEditClick = () => {

    }

    const onRemoveClick = (index) => {
        setData(data => [...data.slice(0, index), ...data.slice(index+1)])
    }

    const onAddItemClick = () => {
        setData(data => [...data, {
            id : data.length,
            title: inputVal,
            status: 'Active'
        }]);
    } 

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }


  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div>Title</div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor:'grey', height: '300px', width: '600px'}}>
            {data.map((ele,index) => 
                <div style={{display: 'flex', alignItems: 'center'}}>
                <div>{ele.title}</div>
                <button onClick={() => onEditClick(index)}>Edit</button>
                <button onClick={() => onRemoveClick(index)}>Remove</button>
                </div>
            )}
            <input type='text' placeholder='Enter Task to be added' onChange={handleInputChange}/>
            <button onClick={onAddItemClick}>Add Items</button>
        </div>
        <div>Footer</div>
    </div>
  )
}
