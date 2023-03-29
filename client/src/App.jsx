import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import MyNavBar from './components/Navbar'
import Login from './components/LoginPage';
import ListStudents from './components/ListStudents'


function App() {


  const [users, setUsers] = useState([])
  const [ç, setCurrentUser] = useState(null)

  console.log(currentUser)
  return (
    <div className="App">
      <MyNavBar />
      {currentUser ?
        <button onClick={() => setShow(true)}>Logout</button> : <Login users={users} setUsers={setUsers} setCurrentUser={setCurrentUser} />}
      {/*<ListStudents /> */}

    </div>
  )
}

export default App
