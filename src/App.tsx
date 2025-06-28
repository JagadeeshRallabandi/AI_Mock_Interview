import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { HomePage, SignInPage, SignUpPage } from "./routes"
import { PublicLayout } from "./layouts/public-layout"

export const App = () =>{
  return(
      <Router>
        <Routes>
          {/* public Routes */}
          <Route path='/sign-in' element={<SignInPage/>}/>
          <Route path='/sign-up' element={<SignUpPage/>}/>
          <Route element={<PublicLayout/>}>
          <Route path="/" element={<HomePage/>}/>    
          </Route>

          {/* protected Routes */}


        </Routes>
      </Router>
  )
}