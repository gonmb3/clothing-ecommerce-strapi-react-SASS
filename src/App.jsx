import {
  createBrowserRouter ,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";


import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/singleProducts/SingleProduct";


// react router dom & layout component
const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/product/:id",
          element:<SingleProduct/>
        },
        
      ]
    }
  
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App