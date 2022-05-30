import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';

import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users}</h2>

        </div>
    );
};

export default Users;