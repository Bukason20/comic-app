import {
    createBrowserRouter,
    Route, 
    createRoutesFromElements,
    RouterProvider
      } from "react-router-dom";
import NavLayout from "../components/NavLayout/NavLayout";
import Homepage from "../pages/Homepage/Homepage";
import NotFound from "../pages/NotFound/NotFound";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashLayout from "../layouts/DashLayout/DashLayout";
import Collection from "../pages/Dashboard/Collection";
import History from "../pages/Dashboard/History";
import Save from "../pages/Dashboard/Save";

    const Routy = () => {
    
      const router = createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path='/' element={<NavLayout />}>
              <Route index element = {<Homepage />} />
              <Route path = "*" element = {<NotFound />}/>
            </Route>

            {/* DASHBOARD */}
              <Route path = "dash" element = {<DashLayout />}> 
                <Route index element = {<Dashboard />} />
                <Route path ='collect' element = {<Collection />} />
                <Route path= 'hist' element = {<History />} />
                <Route path = 'save' element = {<Save />} />
              </Route>
             
              {/* ERROR PAGE */}
              <Route path = "*" element = {<NotFound />}/>

              {/* LOGIN AND SIGNUP PAGE */}
              <Route path="Login" element={<LoginPage />} />
              <Route path="Signup" element={<SignupPage />} />
            
          </>
          
      
        )
      )
      return (
        
        <div>
             <RouterProvider router={router} />
        </div>
      )
    }
    
    export default Routy