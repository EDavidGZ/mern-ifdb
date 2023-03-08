import reactLogo from './assets/react.svg'
import './App.css'
import ComShowBlogs from './blogs/showBlog'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateBlog from './blogs/createBlog'
import EditBlog from './blogs/editBlog'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ComShowBlogs/> }/>
        <Route path='/create' element={ <CreateBlog/> }/>
        <Route path='/edit/:id' element={ <EditBlog/> }/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
