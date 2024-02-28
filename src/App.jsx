import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav2 from './pages/Nav2.jsx';
import Nav1 from './pages/Nav1.jsx';
import Nav3 from './pages/Nav3.jsx';
// import Moods from "./pages/Moods.jsx";
// import Foods from "./pages/Foods.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                    <Route path="/nav1" exact={true} element={<Nav1 />} />
                    <Route path="/nav2" element={<Nav2 />} />
                    <Route path="/nav3" element={<Nav3/>} />
            </Routes>
        </BrowserRouter>
        {/*<Routes>*/}
        {/*    <Route path="/" exact={true} element={<Nav1 />} />*/}
        {/*    <Route path="/life" element={<Nav2 />} />*/}
        {/*    <Route path="/hobby" element={<Nav3/>} />*/}
        {/*    <Route path="/moods" element={<Moods/>} />*/}
        {/*    <Route path="/foods" element={<Foods/>} />*/}
        {/*</Routes>*/}
    </>
  )
}

export default App
