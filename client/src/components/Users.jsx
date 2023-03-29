import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const SelectUser = ({ show, setShow }) => {

    const [users, setUsers] = useState([])
    const loadUsers = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8081/api/users")
            .then((response) => response.json())
            .then((users) => {
                setUsers(users);
            });
    }

    useEffect(() => {
        loadUsers();
    }, [users]);

    // console.log(users)
    return (
     <div>
        <form type="submit">
            <label>Select Your Username to Login</label>
            <div>
                <select>
                <option></option>
                    {users.map((user) => <option key={user.id}>{user.username}</option>)}
                </select>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
     </div>
    )

}

export default SelectUser;