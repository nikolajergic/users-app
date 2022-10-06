import UserService from "../services/UserService";
import React, { useState, useEffect } from 'react';
import '../App.css';
import Records from '../records.json';


function Users() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(
        () => {
            setUsers(UserService.getAll());
        },
        [])


    const handleDeleteClick = (userId) => {
        const newUsers = [...users];

        const index = users.findIndex((user) => user.id === userId);

        newUsers.splice(index, 1);

        setUsers(newUsers);
    };

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
                    </tr>
                </thead>
                <tbody>
                    {users.filter(user => user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search)).map((users) => (
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
            <input type="text" placeholder="Search..." className="search" onChange={(e) => setSearch(e.target.value)} />
            <br></br>
            <button onClick={() => handleDeleteClick(users.id)}>Delete</button>
        </div>
    );
}


export default Users;