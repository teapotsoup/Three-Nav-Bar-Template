import { Route, Routes } from 'react-router-dom';
import Life from './pages/Life.jsx';
import Me from './pages/Me.jsx';
import Hobby from './pages/Hobby.jsx';
import Moods from "./pages/Moods.jsx";
import Foods from "./pages/Foods.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" exact={true} element={<Me />} />
            <Route path="/life" element={<Life />} />
            <Route path="/hobby" element={<Hobby/>} />
            <Route path="/moods" element={<Moods/>} />
            <Route path="/foods" element={<Foods/>} />
        </Routes>
    </>
  )
}

export default App
