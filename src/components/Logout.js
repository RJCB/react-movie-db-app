import React, { useContext, useEffect } from 'react'
import { deleteSession } from '../API';
import { userContext } from '../App';

const Logout = () => {
    const { user } = useContext(userContext);
    useEffect(() => {
        const logout = async () => {
            try {
                const res = await deleteSession(user.sessionId);
                //deleting session_id api call is returning 404, look into it and update code here as needed.
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