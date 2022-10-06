import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/CreateUser">Create User</Link>
                </li>
                <li>
                    <Link to="/Users">Users</Link>
                </li>
            </ul>
        </div>
    );
}
export default navbar;