import React, {useState} from "react";

import style from "./newtodo.module.css";

const NewTodo = (props) => {

    const [todo, setTodo] = useState({ title: "", desc: "" });
    const { title, desc } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
       props.onAddTodo(todo);
        setTodo({title:"",desc:""})
    }


    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return {
                ...oldTodo, [name]: e.target.value
            }
        });
    }


  return (
      <form className={style.form} onSubmit={handleSubmit}>
          
      <div className={style["from-field"]}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" value={title} onChange = {handleChange} />
          </div>
          
      <div className={style["from-field"]}>
        <label htmlFor="desc">Description: </label>
        <textarea type="text" name="desc" id="desc" value={desc} onChange = {handleChange} />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
