
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </>
  );
}

export default App;
