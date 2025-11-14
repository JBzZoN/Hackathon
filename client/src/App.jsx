import './App.css'
import Login from './pages/login/Login'
import {Routes, Route} from 'react-router'
import {ToastContainer} from 'react-toastify'
import Home from './pages/home/home'
import Register from './pages/register/register'
import AllMovies from './pages/allMovies/allMovies'
import AllReviews from './pages/allReviews/allReviews'
import ChangePassword from './pages/changePassword/changePassword'
import EditProfile from './pages/editProfile/editProfile'
import MyReviews from './pages/myReviews/myReviews'
import SharedWithMe from './pages/sharedWithMe/sharedWithMe'
import DeleteReview from './pages/deleteReview/deleteReview'
import EditReview from './pages/editReview/editReview'
import ShareReview from './pages/shareReview/shareReview'

function App() {
  return <div className='container'>
      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/dashboard' element={<Home/>}>
          <Route path="allMovies" element={<AllMovies/>}/>
          <Route path="allReviews" element={<AllReviews/>}/>
          <Route path="changePassword" element={<ChangePassword/>}/>
          <Route path="editProfile" element={<EditProfile/>}/>
          <Route path="myReviews" element={<MyReviews/>}/>
          <Route path="sharedWithMe" element={<SharedWithMe/>}/>

          <Route path="deleteReview" element={<DeleteReview/>}/>
          <Route path="editReview" element={<EditReview/>}/>
          <Route path="shareReview" element={<ShareReview/>}/>
          
        </Route>

      </Routes>
      <ToastContainer/> 
  </div>
}

export default App
