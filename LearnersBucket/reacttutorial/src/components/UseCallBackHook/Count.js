import React, { memo } from 'react'

function Count({text,count}) {

    console.log('Count component called ', {text});
  return (
    <div>{text} - {count}</div>
  )
}

export default memo(Count)
