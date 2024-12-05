import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './assets/Header';
function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get('/api/blogs').then((resp) => {
      // console.log(resp.data);
      setBlogs(resp.data)
    })
  }, [])
  const len = blogs.length;
  console.log(len);

  return (
    <>
    <Header/>
      {
        blogs.map((blog) => (
          <>
            <div>
              <h3> {blog.title} </h3>
              <h4>{blog.content}</h4>
            </div>
          </>
        ))
      }
    </>
  )
}

export default App
