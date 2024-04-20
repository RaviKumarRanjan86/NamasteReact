import React, { memo } from 'react'

function MyButton({handleClick,text,children}) {
    console.log('MyButton component called ', text);
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default memo(MyButton)
