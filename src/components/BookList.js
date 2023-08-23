import BookShow from "./BookShow";
function BookList({ passBooksList, onEditBook,onDeleteBookById }) {
  console.log(passBooksList);
  const renderedBookList = passBooksList.map((book) => {
    return <BookShow key={book.id} book={book} onEditBook={onEditBook} onDeleteBookById={onDeleteBookById}/>;
  });
  return (
    <>
      <section className="card-section  row">{renderedBookList}</section>
    </>
  );
}
export default BookList;
