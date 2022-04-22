import "./App.css";
import SongAdd from "./components/songs/SongAdd.component";
import SongList from "./components/songs/SongList.component";
import UserList from "./components/users/UserList.component";

function App() {
  return (
    <div className="App">
      <UserList></UserList>
      <div className="ui divider"></div>
      <SongAdd></SongAdd>
      <div className="ui divider"></div>
      <SongList></SongList>
    </div>
  );
}

export default App;
