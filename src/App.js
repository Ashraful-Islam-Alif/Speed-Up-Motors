
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-bootstrap';
import Purchase from './Pages/Home/Purchase';
import Register from './Pages/Login/Registration';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/tool/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
