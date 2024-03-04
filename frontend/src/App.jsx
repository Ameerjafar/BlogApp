import { Signup } from "./component/Signup"
import { Signin } from './component/Signin'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/signup' element = {<Signup></Signup>}></Route>
          <Route path = '/signin' element = {<Signin></Signin>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
