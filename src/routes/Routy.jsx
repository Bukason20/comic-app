import {
    createBrowserRouter,
    Route, 
    createRoutesFromElements,
    RouterProvider
      } from "react-router-dom";
import NavLayout from "../layouts/NavLayout/NavLayout";

    const Routy = () => {
    
      const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<NavLayout />}>


          </Route>
        )
      )
      return (
        
        <div>
             <RouterProvider router={router} />
        </div>
      )
    }
    
    export default Routy