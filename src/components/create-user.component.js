import React, {useEffect, useState} from 'react';
import axios from "axios"


const CreateUsers = () => {
    const [user, setUser] = useState({username:''})
    const handleUser = (e) =>{
        setUser({username:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
        setUser({username:''})
    }
    return ( 
        <div>
            <form onSubmit={(e) => handleSubmit(e)} action="">
                <div className="form-group">
                    <input type="text" onChange={(e)=> handleUser(e)} value={user.username} className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add User" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}

export default CreateUsers ;