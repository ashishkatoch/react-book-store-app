import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onEditBook,onDelBook }) {
  const [toggle, setToggle] = useState(false);
  const showEditForm = () => {
    setToggle(true);
  };
  const hideEditForm = () => {
    setToggle(false);
  };  
  const deleteCurrentCard = () => {
    onDelBook(book.id);
  };
  
  let customHTML;
  if (toggle) {
    customHTML = <BookEdit onEditBook={onEditBook} book={book}  hideEditForm={hideEditForm}/>;
  } else {
    customHTML = "";
  }
  
  return (
    <>
      <div className="card mb-3 d-grid gap-3" key={book.id} >
        <div className="card-body">
          <span className="edit" onClick={showEditForm}>
            =
          </span>
          <span className="delete" onClick={deleteCurrentCard}>
            X
          </span>
        </div>
        {customHTML}
        <div className="bookname">{book.title}</div>
      </div>
    </>
  );
}
export default BookShow;
