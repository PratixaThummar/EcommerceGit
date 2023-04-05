import React, { useState, useEffect } from "react";
import "./style.css";

const getlocaldata = () => {
  const lists = localStorage.getItem("todo_list");
  if (lists) {
    console.log(lists)
    return JSON.parse(lists);
  }
  else {
    return [];
  }
}

const Todo = () => {
  const [inputdata, setInputdata] = useState("")
  const [items, setitem] = useState(getlocaldata());
  const [editdata, setedititem] = useState("");
  const [toggleButton, settogglebutton] = useState(false);

  const addItem = () => {
    if (!inputdata) {
      alert("fill data")
    }
    else if (inputdata && toggleButton) {
      setitem(items.map((currentelement) => {
        if (currentelement.id === editdata) {
          return { ...currentelement, name: inputdata }
        }
        else {
          return currentelement
        }
      }));
      setInputdata("");
      setedititem(null)
      settogglebutton(false)
    }
    else {
      const myinputdata = {
        id: new Date().getTime().toString(),
        name: inputdata,
      }
      console.log("jjj", myinputdata.id)
      console.log("jjj", myinputdata.name)
      setitem([...items, myinputdata]);
      setInputdata("");
    }
  }

// find and filter-----------------------
 // find returns the first matching element while filter returns all the matching elements in a new array.
  const Editdata = (index) => {
    const todo_item_edited = items.find((currentelement) => {
      console.log(currentelement)
      return currentelement.id === index
    });
    setInputdata(todo_item_edited.name);
    setedititem(index);
    settogglebutton(true);
  }

  useEffect(() => {
    localStorage.setItem("todo_list", JSON.stringify(items));
  }, [items]);

  const removealldata = () => {
    setitem([])
  }
  const DeleteItems = (index) => {
    console.log(index)
    const updateItem = items.filter((currentelement) => {
      return currentelement.id !== index
    });

    setitem(updateItem)
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputdata(event.target.value)}
            />
            {
              toggleButton ?
                <i className="far fa-edit add-btn" onClick={addItem} ></i>
                :
                <i className="fa fa-plus add-btn" onClick={addItem}></i>
            }
          </div>

          <div className="showItem">
            {items.map((currentelement, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{currentelement.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={() => Editdata(currentelement.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={() => DeleteItems(currentelement.id)}></i>
                  </div>
                </div>
              )
            })}

          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removealldata}
            >              <span> CHECK LIST</span>
            </button>
          </div>
        </div>s
      </div>
    </>
  );
};

export default Todo;
