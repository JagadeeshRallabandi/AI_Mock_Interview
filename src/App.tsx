import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { HomePage, SignInPage, SignUpPage } from "./routes"
import { PublicLayout } from "./layouts/public-layout"
import ProtectedRoute from "./layouts/protected-route"
import MainLayout from "./layouts/main-layout"
import { Generate } from "./views/generate"
import { Dashboard } from "./routes/dashboard"

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
          <Route element={
            <ProtectedRoute>
              <MainLayout/>
            </ProtectedRoute>
           }>
            <Route path="/generate" element={
              <Generate/>}>
                 <Route index element={<Dashboard/>}/> 

            </Route>

          </Route>

        </Routes>
      </Router>
  )
}