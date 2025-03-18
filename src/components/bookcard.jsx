// write the book component code here
import React from 'react'

function Bookcard({name,image,author,genre}) {
  return (
    <div>
    <h1>bookname:{name}</h1>
     <h2>author:{author}</h2>
     <p>genre: {genre}</p>
     <img src={image}></img>
     </div>
  )
}

export default Bookcard