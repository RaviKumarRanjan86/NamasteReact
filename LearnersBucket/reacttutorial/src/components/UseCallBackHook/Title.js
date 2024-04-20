import React, { memo } from 'react'

function Title() {
    console.log('title component called')
  return (
    <div>Title</div>
  )
}

export default memo(Title)