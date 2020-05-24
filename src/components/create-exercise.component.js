import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"

const CreateExcersises = () => {
    const[exersise, setExersise] = useState({})
    const[username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [date, setDate] = useState('')
    const [users, setUsers] = useState([])

    const onchangeUsername =(e) =>{
        setUsername(e.target.value)
    }
    const onchangeDescription =(e) =>{
        setDescription(e.target.value)
    }
    const onchangeDuration =(e) =>{
        setDuration(e.target.value)
    }
    const onchangeDate =(date) =>{
        setDate(date)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const sendExe = {
            username: username,
            description: description,
            duration: duration,
            date: date,
        }
        console.log(sendExe)
        axios.post('http://localhost:5000/excersises/add', sendExe).then(res => console.log(res.data))
        window.location = "/"
    }
    useEffect(()=>{
        axios.get('http://localhost:5000/users/').then(response =>{
            if(response.data.length > 0){
                setUsers(response.data.map(user => user.username))
                setUsername(response.data[0].username)
            }
        })
    },[])
    return (  
        <div>
        <h1>Create Exercise Log</h1>
            <form onSubmit={(e)=> handleSubmit(e)} action="">
                <div className="form-group">
                    <label htmlFor="">Username:</label>
                    <select 
                        required
                        className="form-control" 
                        value={username}
                        onChange={(e)=> onchangeUsername(e)}
                    >
                        {
                            users.map((user)=>{
                                return <option key={user} value={user}>{user}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={description}
                        onChange={(e)=> onchangeDescription(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Duration (In Minutes):</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={duration}
                        onChange={(e)=> onchangeDuration(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Date:</label>
                    <DatePicker
                        selected={date}
                        onChange={(date)=> onchangeDate(date)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}

export default CreateExcersises ;