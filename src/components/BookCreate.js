import { useState } from "react";
function BookCreate({ parentOnCreate }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    parentOnCreate(title);
    setTitle("");
  };
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="edit-title-section row g-3">
        <form onSubmit={handleFormSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Enter Book Title
            </span>
            <input
              className="form-control"
              type="Text"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              value={title}
            ></input>
                 <button className="btn btn-primary input-group-btn">Create</button>
          </div>
    
        </form>
      </div>
    </>
  );
}
export default BookCreate;
