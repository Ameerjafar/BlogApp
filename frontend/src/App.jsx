import { Signup } from "./component/Signup"
import { Signin } from './component/Signin'
import { Blog } from "./component/Blog"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { BlogCard } from "./component/BlogCard"
import { useState } from "react"
import { ShowBlog } from "./component/ShowBlog"
import { OwnBlog } from "./component/OwnBlog"
import { EmptyBlog } from "./component/EmptyBlog"
function App() {
  const [userId, setUserId] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Navigate to = '/signin' />} />
          <Route path = '/signup' element = {<Signup></Signup>}></Route>
          <Route path = '/signin' element = {<Signin setUserId = { setUserId } setRedirect = { setRedirect }></Signin>}></Route>
          {redirect && <Route path = '/addblog' element = {<Blog userId = { userId }></Blog>}></Route>}
          <Route path = '/blogs' element = {<BlogCard setTitle = { setTitle } setContent = { setContent } userId = { userId }></BlogCard>}></Route>
          <Route path = '/showblog' element = {<ShowBlog title = { title } content = { content } userId = { userId }></ShowBlog>}></Route>
          <Route path = 'ownblog' element = {<OwnBlog userId = { userId }></OwnBlog>}></Route>
          <Route path = '/emptyblog' element = {<EmptyBlog></EmptyBlog>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
