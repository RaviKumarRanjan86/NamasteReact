import React, { useEffect, useRef } from 'react'

function UseRefHook() {

    const inputRef = useRef(null);

useEffect(() => {
    inputRef.current.focus();
}, [])
  return (
    <div>
        <h1>Use ref Hook Example</h1>
        <input type='text' ref={inputRef}/>
    </div>
  )
}

export default UseRefHook