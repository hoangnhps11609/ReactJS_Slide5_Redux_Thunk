import "./App.css";
// import SongAdd from "./components/songs/SongAdd.component";
// import SongList from "./components/songs/SongList.component";
// import UserList from "./components/users/UserList.component";
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Header from "./components/header/Header.component";
import Homepage from "./pages/homepage/Homepage.page";
import UserListPage from "./pages/users/UserList.page";
import SongListPage from "./pages/songs/SongList.page";
import SongAddPage from "./pages/songs/SongAdd.page";
import Loginpage from "./pages/auth/Login.page";


function App() {
  return (
    // <div className="App">
    //   <UserList></UserList>
    //   <div className="ui divider"></div>
    //   <SongAdd></SongAdd>
    //   <div className="ui divider"></div>
    //   <SongList></SongList>
    // </div>


    <BrowserRouter>
      <Header></Header>
      <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route path='/user-list' element={<UserListPage/>}></Route>
          <Route path='/song-list' element={<SongListPage/>}></Route>
          <Route path='/song-add' element={<SongAddPage/>}></Route>
          <Route path='/login' element={<Loginpage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
