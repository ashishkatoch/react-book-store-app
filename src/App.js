import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    fetchBooks();
    console.log('Executes');
  },[]);
  const fetchBooks = async()=>{
    const response = await axios.get(`http://localhost:3001/books`);
    setBooks(response.data);
  }
  
  const onCreate = async (newBookTitle) => {
    const response = await axios.post(`http://localhost:3001/books`,
    {title:newBookTitle});
    const newBooks = [...books, response.data];
    setBooks(newBooks);
  };
  const onEditBook = async(id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,
    {title:newTitle});
    
    const updatedBookList = books.map((book) => {
      if (book.id == id) {
        return { ...book, ...response.data };
      }
      return book;
    }); 
    setBooks(updatedBookList);
   };

  const onDeleteBookById = async(id) => {
    const deleBookList = books.filter((book) => {
      if (book.id !== id) {
        return book;
      }
    });
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(deleBookList);
  };

  return (
    <div className="App container">
      <div className="edit-title-section mb-3 row">
        <BookCreate parentOnCreate={onCreate} />
        <BookList
          passBooksList={books}
          onEditBook={onEditBook}
          onDeleteBookById={onDeleteBookById}
        />
      </div>
    </div>
  );
}

export default App;
