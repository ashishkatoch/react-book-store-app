import { useState } from "react";
function BookEdit({ onEditBook, book,hideEditForm }) {
  const [title, setTitle] = useState(book.title);
  const handleupdateTitle = () => {};
  const handleonChange = (e) => {
    setTitle(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEditBook(book.id, title);
    hideEditForm();
  };
  return (
    <>
      <div className="edit-title-section mb-3">
        <form onSubmit={handleFormSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              New Title
            </span>
            <input
              className="form-control"
              type="text"
              value={title}
              onChange={handleonChange}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-3">Update</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default BookEdit;
