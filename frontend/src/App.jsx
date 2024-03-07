import { Signup } from "./component/Signup"
import { Signin } from './component/Signin'
import { Blog } from "./component/Blog"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { BlogCard } from "./component/BlogCard"
import { useState } from "react"
function App() {
  const [userId, setUserId] = useState('');
  const [redirect, setRedirect] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Navigate to = '/signin' />} />
          <Route path = '/signup' element = {<Signup></Signup>}></Route>
          <Route path = '/signin' element = {<Signin setUserId = { setUserId } setRedirect = { setRedirect }></Signin>}></Route>
          {redirect && <Route path = '/addblog' element = {<Blog userId = { userId }></Blog>}></Route>}
          <Route path = '/blogs' element = {<BlogCard></BlogCard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
