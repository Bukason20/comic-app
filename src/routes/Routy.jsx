import {
    createBrowserRouter,
    Route, 
    createRoutesFromElements,
    RouterProvider
      } from "react-router-dom";
import NavLayout from "../components/NavLayout/NavLayout";
import Homepage from "../pages/Homepage/Homepage";
import NotFound from "../pages/NotFound/NotFound";

    const Routy = () => {
    
      const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<NavLayout />}>
            <Route index element = {<Homepage />} />
            <Route path = "*" element = {<NotFound />}/>
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