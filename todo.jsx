import React, { useState } from "react";

export default function Todo() {
  const [input, setinput] = useState(" apple");
  const [items, setitems] = useState([]);
  const [deleted, setDeleted] = useState(false);
  function Event(e) {
    setinput(e.target.value);
  }
  function clickHandle() {
    setitems((olditem) => {
      return [...olditem, input];
    });
  }

  function handleDelete(idx) {
    setitems((olditem) => olditem.filter((_, i) => i !== idx));
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To DO App</h1>
          <br />
          <input placeholder="add a items" type="text" onChange={Event} />
          <button
            onClick={clickHandle}
            className="btn btn-success"
            style={{ marginLeft: "1rem" }}
          >
            Add
          </button>

          <ol>
            {items.map((itemval, idx) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    marginTop: "2rem",
                  }}
                  className="list_container"
                >
                  <li>
                    {itemval}
                    <button
                      style={{ marginLeft: "14rem" }}
                      className="btn btn-danger"
                      onClick={() => handleDelete(idx)}
                    >
                      delete
                    </button>
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
