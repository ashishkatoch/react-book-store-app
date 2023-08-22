import BookShow from "./BookShow";
function BookList({ passBooksList, onEditBook,removeFromBookList }) {
  const renderedBookList = passBooksList.map((book, index) => {
    return <BookShow key={index} book={book} onEditBook={onEditBook} onDelBook={removeFromBookList}/>;
  });
  return (
    <>
      <section className="card-section">{renderedBookList}</section>
    </>
  );
}
export default BookList;
