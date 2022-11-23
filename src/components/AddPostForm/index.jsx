import React, {useContext} from 'react'
import s from './index.module.css'
import { Context } from '../../context';
export default function AddPostForm() {
    const formSubmit = (event) => {
        event.preventDefault();
        const [title, text] = event.target;
        addPost(title.value, text.value);
        title.value = '';
        text.value = '';
    }
    const {addPost} = useContext(Context)
  return (
    <form className = {s.container} onSubmit = {formSubmit}>
        <input type="text"  name = 'title' placeholder = 'Your title'/>
        <input type="text"  name = 'text' placeholder = 'Your text'/>
        <button>Add post</button>
    </form>
  )
}
