import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [books,setBooks] = useState([]);
  const onCreate = (newBookTitle)=>{
    const newBooks = [...books,{title:newBookTitle,id:books.length}];
    setBooks(newBooks);
   
  }
  const onEditBook = (id,newTitle)=>{
    const updatedBookList = books.map((book)=>{
             if(book.id==id){
              return {...book,title:newTitle};
             }
             return book;
    });
    setBooks(updatedBookList);
  }

  const removeFromBookList = (id)=>{
    const deleBookList = books.filter((book)=>{
      if(book.id!==id){
       return book;
      }
      
});
setBooks(deleBookList);     
  }
  
  return (
    <div className="App container">
    <div className="edit-title-section mb-3 row">
    <BookCreate parentOnCreate={onCreate}/>
    <BookList passBooksList={books} onEditBook={onEditBook} removeFromBookList={removeFromBookList}/>
    </div>
    </div>
  );
}

export default App;
