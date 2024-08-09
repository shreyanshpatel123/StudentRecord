import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./5layout";
import Insert from "./1insert";
import Display from "./3display";
import Search from "./4search";
import Home from "./2home";
import Update from "./7update";
import EditData from "./8editdata";



const App=()=>{
  return(
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="2home" element={<Home/>}/>
      <Route path="1insert" element={<Insert/>}/>
      <Route path="3display" element={<Display/>}/>
      <Route path="4search" element={<Search/>}/>
      <Route path="7update" element={<Update/>}/>
      <Route path="myedit/:id" element={<EditData/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
      </>
  )
}
   
export default App