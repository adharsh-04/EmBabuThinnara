import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Pages/Home/Home';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
function App() {
  const router=createBrowserRouter([
    {
      path:'',
      element:<Root/>,
      children:[
        {
          path:'',
          element:<Home/>,
        },
        {
          path:'signin',
          element:<Signin/>
        },
        {
          path:'signup',
          element:<Signup/>
        },
        {
          path:'userProfile',
          element:<userProfile/>

        },{
          path:'restaurantProfile',
          element:<restaurantProfile/>
        }
      ]
    }
  ])
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
