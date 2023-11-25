import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

// function Welcome(){
//   return (
//     <div>
//       <h1>This is an h1</h1>
//       <p>Hello World from React!!!</p>
//     </div>
      
//   )
// }


let title = 'This is the title of the book'
let price = 20.99
let img = 'https://m.media-amazon.com/images/I/81h4xinmqmL._AC_UL320_.jpg'
let info= 'this is the info about the book';
const BookList = () => {
  return (
    <div className='container'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
     
    </div>
  )
}


const Book = () => {
  return (
    <div className='book-card'>
      <img src={img}/>
      <h1> {title} </h1>
      <p> {info} </p>
      <h5> ${price} </h5>
    </div>
  )
}





ReactDOM.render(<BookList/>,document.querySelector('#root'))
