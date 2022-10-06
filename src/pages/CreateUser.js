import React, { useState } from 'react';
import UserService from '../services/UserService';

function CreateUser() {

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        addres: '',
        salary: '',
    });

    const [setError, setNewError] = useState(
        false
    )


    return (
        <div>
            <h2>Add new user</h2>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 200,
                    marginLeft: 15,
                }}
            >
                <input
                    type='text'
                    value={newUser.firstName}
                    placeholder='First name'
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, firstName: target.value })
                    }
                />
                <input
                    type='text'
                    value={newUser.lastName}
                    placeholder='Last name'
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, lastName: target.value })
                    }
                />
                <input
                    type='text'
                    value={newUser.username}
                    placeholder='Username'
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, username: target.value })
                    }
                />
                <input
                    type='text'
                    min='1'
                    value={newUser.email}
                    placeholder='Email'
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, email: target.value })
                    }
                />
                <input
                    type='number'
                    min='1'
                    value={newUser.phone}
                    placeholder='Phone'
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, phone: target.value })
                    }
                />
                <input
                    type='text'
                    value={newUser.addres}
                    placeholder='Addres'
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, addres: target.value })
                    }
                />
                <input
                    type='number'
                    min='1'
                    value={newUser.salary}
                    placeholder='Salary'
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, salary: target.value })
                    }
                />
                {setError && <h1>Username exists</h1>}
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        if (window.confirm("Are you sure?")) {
                            try {
                                UserService.addUser(newUser);
                                setNewError(false);
                            } catch (error) {
                                setNewError(true);
                            }
                        }
                    }
                    }
                >
                    Submit
                </button>

            </form>
        </div>
    );
}

export default CreateUser;