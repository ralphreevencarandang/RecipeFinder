
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import { BrowserRouter, Routes,Route } from "react-router";
function App() {


  return (
    
     <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>

     </>
  
  )
}

export default App
