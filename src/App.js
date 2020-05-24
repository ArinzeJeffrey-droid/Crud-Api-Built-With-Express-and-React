import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component"
import EditExcersises from "./components/edit-exercise.component"
import CreateExcersises from "./components/create-exercise.component"
import CreateUsers from "./components/create-user.component"


function App() {
  return (
    <Router>
<div className="container">
<Navbar/>
      <br/>
      <Route path="/" exact component={ExercisesList}/>
      <Route path="/edit/:id" component={EditExcersises}/>
      <Route path="/create" component={CreateExcersises}/>
      <Route path="/user" component={CreateUsers}/>
</div>
    </Router>
  );
}

export default App;
