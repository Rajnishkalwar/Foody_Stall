import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home";
import RestMenuPage from "./components/RestMenuPage";
import { Provider } from "react-redux";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import appStore from "./utilis/appStore";
import Cart from "./components/Cart";


const AppLayout=()=>{
    return(  
      <Provider store={appStore} >
         <div>
         <Header/>
         <Outlet/>
       </div>
       </Provider>
     
        );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/explore",
        element:<Body/>
      },
    
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/resturant/:resId",
        element:<RestMenuPage/>,
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
      
    ],
    errorElement:<Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);