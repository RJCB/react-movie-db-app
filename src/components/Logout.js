import React, { useContext, useEffect } from 'react'
import { deleteSession } from '../API';
import { userContext } from '../App';

const Logout = () => {
    const { user } = useContext(userContext);
    useEffect(() => {
        const logout = async () => {
            try {
                const res = await deleteSession(user.sessionId);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        logout();
    }, [user]);
    return (
        <div>Logout</div>
    )
}

export default Logout