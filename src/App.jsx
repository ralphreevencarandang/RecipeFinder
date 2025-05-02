
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import CountryPage from "./pages/CountryPage";
import CategoryPage from "./pages/CategoryPage";
import CategoryMeal from "./pages/CategoryMeal";
import CountryMeal from "./pages/CountryMeal";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";

import MainLayout from "./layout/MainLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/country' element={<CountryPage/>}/>
          <Route path='/category' element={<CategoryPage/>}/>
          <Route path='/category-meal/:category' element={<CategoryMeal/>}/>
          <Route path='/country-meal/:country' element={<CountryMeal/>}/>
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
