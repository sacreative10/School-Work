import React from 'react';
import ReactDOM from 'react-dom';

function dlock()
{
  const element = (
    <div>Hello DERE</div>,
      <h1>It is {new Date().toLocaleTimeString()}.</h1> 
       );
       ReactDOM.render(element, document.getElementById('root'));

}

setInterval(dlock, 1000);