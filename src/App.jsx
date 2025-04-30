
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import CountryPage from "./pages/CountryPage";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";

import MainLayout from "./layout/MainLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/country' element={<CountryPage/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  );

  return (
    
     <>

      <RouterProvider router={router}/>



     
      {/* <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/country" element={<CountryPage/>}/>
      
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter> */}

     </>
  
  )
}

export default App
