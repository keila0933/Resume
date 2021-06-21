import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Profile from './components/Profile'
import Education from './components/Education'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Works from './components/Works'
import Footer from './components/Footer'
import './css/style.scss'

ReactDOM.render(
  <div>
    <Header />
    <Profile />
    <Education />
    <Skill />
    <Experience />
    <Works />
    <Footer />
  </div>,
  document.getElementById('root')
)
