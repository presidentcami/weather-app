import React, {useState, useEffect} from 'react';
import AddUserForm from './AddUserForm';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Login = ({ users, setUsers, setCurrentUser }) => {

    const [selectedUser, setSelectedUser] = useState(null)
    const loadUsers = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8081/api/users")
            .then((response) => response.json())
            .then((users) => {
                setUsers(users);
                // console.log(users)
            });
    }

    useEffect(() => {
        loadUsers();
        // console.log(users)
    }, []);


    const handleUserSelect = (e) => {
        e.preventDefault()
        // console.log(e)
        fetch(`http://localhost:8081/api/oneuser/${selectedUser}`)
            .then((response) => response.json())
            .then((user) => {
                setCurrentUser(user);
            });
    }

    // console.log(show)
    // console.log(users)
    // this whole return will probably be actually a component that goes into App.js, along with make new user form
    return (
        <>
     <div>
        <form type="submit" onSubmit={handleUserSelect}>
            <label>Select Your Username to Login</label>
            <div>
                <select onChange={(e) => setSelectedUser(e.target.value)} >
                <option></option>
                    {users.map((user) => <option key={user.id} value={user.id} >{user.username}</option>)}
                </select>
            </div>
            <div>
            <Button type="submit" variant="outline-success" style={{ padding: '0.6em', marginTop: '0.9em' }}>Login</Button>
            </div>
        </form>
     </div>
     
     <div>
        <AddUserForm setUsers={setUsers} />
     </div>
     </>
    )

}

export default Login;