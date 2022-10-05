import UserService from "../services/UserService";
import React, {  useState,useEffect } from 'react';
import '../App.css';
import Records from '../records.json';


function Users() {
    const [users, setUsers] = useState([]);

    useEffect(
        () => {
          setUsers(UserService.getAll());
        },
        [])
        
    return (
        <div>
        <table>
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Addres</th>
                <th>Salary</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users.map((users) => (
            <tr key={users.id}>
                <th>{users.firstName}</th>
                <th>{users.lastName}</th>
                <th>{users.username}</th>
                <th>{users.email}</th>
                <th>{users.phone}</th>
                <th>{users.addres}</th>
                <th>{users.salary}</th>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
      );
    }


export default Users;