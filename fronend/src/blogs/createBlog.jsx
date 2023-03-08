import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'
const createBlog = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const navigete = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title: title, content: content })
    navigete('/')
  }
  return (
    <div>
      <h3>CREATE POST</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">CREATE</button>
      </form>
    </div>
  )
}

export default createBlog