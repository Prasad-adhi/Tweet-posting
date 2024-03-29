import classes from './NewPost.module.css';
import { useState } from 'react';
import hideModalhandler from '../App';
function NewPost(props) {


  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
      <p className={classes.actions}>
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
