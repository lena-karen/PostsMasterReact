import AddPostForm from '../AddPostForm'
import PostContainer from '../PostContainer';
import {useState} from 'react'
import {posts_data} from '../../data/posts'
import {Context} from '../../context'
function App() {
  const [posts, setPosts] = useState(posts_data);
  const change_like = (id) => {
          const target = posts.find(el => el.id == id)
          target.like = !target.like
          setPosts([...posts])
  }
  const addPost = (title_value, text_value) => {
    console.log(title_value, text_value)
  }
  return (
    <div>
   <Context.Provider value={{posts, change_like, addPost}}>
      <AddPostForm />
      <PostContainer />
   </Context.Provider>
   </div>
  );
}

export default App;
