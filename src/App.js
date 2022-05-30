
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import Purchase from './Pages/Home/Purchase';
import Register from './Pages/Login/Registration';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './NotFound/NotFound';
import Footer from './Pages/Home/Footer';
import DashBoard from './Pages/Home/DashBoard/DashBoard';
import MyOrders from './Pages/Home/DashBoard/MyOrders';
import AddReview from './Pages/Home/DashBoard/AddReview';
import MyProfile from './Pages/Home/DashBoard/MyProfile';
import Users from './Pages/Home/DashBoard/Users';
import Payment from './Pages/Home/DashBoard/Payment';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>

        <Route path='tool/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </>
  );
}

export default App;
