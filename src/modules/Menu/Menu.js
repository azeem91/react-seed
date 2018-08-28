import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Menu = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit" >
                    <Link to="/">Home</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Menu
