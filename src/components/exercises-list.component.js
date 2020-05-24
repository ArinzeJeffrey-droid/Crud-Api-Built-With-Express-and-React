import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import axios from "axios"


const ExcersisesList = () => {
    const [excersise, setExcersise] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/excersises')
        .then(response =>{
            setExcersise(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const deleteExe = (id)=>{
        axios.delete('http://localhost:5000/excersises'+id)
        .then(res => console.log(res.data))
        setExcersise(excersise.filter(el => el._id !== id))
    }
    const view_all = () => {
        return excersise.map(current => {
            return <tr>
                <td>{current.username}</td>
                <td>{current.description}</td>
                <td>{current.duration}</td>
                <td>{current.date.substring(0,10)}</td>
                <td>
                <Link to={"/edit/"+current._id}>edit</Link> | <a href="#" onClick={()=> deleteExe(current._id)}>delete</a>
                </td>
            </tr>
        })
    }
    return (  
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {view_all()}
                </tbody>
            </table>
        </div>
    );
}

export default ExcersisesList ;