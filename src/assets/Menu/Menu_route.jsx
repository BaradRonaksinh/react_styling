import { Menu , MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
Menu


const Menu_route = () => {
    const Home = () => {
        return (
            <h1>Home Page</h1>
        )
    }
    const About = () => {
        return (
            <h1>About Page</h1>
        )
    }
    const [achor,setAchor] = useState(null)
    const openMenu = (event) => {
        setAchor(event.currentTarget)
    }
    const closeMenu = (event) => {
        setAchor(null)
    }
    return (
        <Router>
            <h1>Raect MUI || Menu</h1>
            <Button onClick={openMenu}>Menu</Button>
            <Menu open={achor} onClose={closeMenu}>
               <MenuItem onClick={closeMenu}><Link to='/'>Home</Link></MenuItem>
               <MenuItem onClick={closeMenu}><Link to='/about'>About</Link></MenuItem>
            </Menu>
            
            
            <Routes>
                <Route path="/" element={<Home />}/>
            
                <Route path="/about" element={<About />}/>
            </Routes>
        </Router>
    )
}

export default Menu_route
