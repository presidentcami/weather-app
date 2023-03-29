import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import MyNavBar from './components/Navbar'
import SelectUser from './components/Users';
import ListStudents from './components/ListStudents'


function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <MyNavBar />
      <SelectUser setShow={setShow} show={show} />
      {/* <ListStudents /> */}

    </div>
  )
}

export default App
