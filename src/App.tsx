import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Options } from "./components/Options";
import { FindJobPage } from "./containers/Find Job";
import { FAQ } from "./containers/FAQ";
import Community from "./containers/Community";
import Hiring from "./containers/Hiring";
import { Messages } from "./containers/Messages";
import { ErrorElement } from "./components/ErrorElement";

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<>
      <NavBar />
      <Outlet />
    </>,
    children:[
      {path:'/',element:
      <>
        <Options />
        <FindJobPage />
      </>
    },
    {path:'/messages',element:<Messages />},
    {path:'/hiring',element:<Hiring />},
    {path:'/community',element:<Community />},
    {path:'/faq',element:<FAQ />},
    ],
    errorElement:<ErrorElement />},
  ])

  return (
    <div className='font-orkney'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
