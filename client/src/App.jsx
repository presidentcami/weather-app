import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import MyNavBar from './components/Navbar'
import Login from './components/LoginPage';
import WeatherInfo from './components/WeatherInfo'


function App() {


  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  console.log(currentUser)
  return (
    <div className="App">
      <MyNavBar currentUser={currentUser} />
      {currentUser ?
        <WeatherInfo currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <Login users={users} setUsers={setUsers} setCurrentUser={setCurrentUser} />}
      {/*<ListStudents /> */}

    </div>
  )
}

export default App
