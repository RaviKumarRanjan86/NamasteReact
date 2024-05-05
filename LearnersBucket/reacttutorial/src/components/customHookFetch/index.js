import React from 'react';
import UseFetch from './UseFetch';

function customHookFetch() {

    const data = UseFetch('https://jsonplaceholder.typicode.com/todos');
    console.log('myData ', data);
  return (
    <div>index</div>
  )
}

export default customHookFetch;