import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home/Home'
import CreatePet from './components/create-post/CreatePet'

import React from 'react'

function App() {
  return (
    <Router>
      <div className="cl">
        <Navbar />
        <Route exact path="/home" component={Home} />
        <Switch>
          <Route exact path="/create-pet" component={CreatePet} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
