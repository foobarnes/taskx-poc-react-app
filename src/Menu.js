import React from 'react';
import './Menu.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Fab from '@material-ui/core/Fab';

import Emoji from './Emoji.js';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Menu">
      <Fab size="small" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="default" aria-label="add">
        <MenuOpenIcon />
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Suggest a task&nbsp;&nbsp;<Emoji symbol="💡" /></MenuItem>
        <MenuItem onClick={handleClose}>Give feedback&nbsp;&nbsp;<Emoji symbol="💌" /></MenuItem>
        <MenuItem onClick={handleClose}>Buy Chandler a coffee</MenuItem>
      </Menu>
    </div>
  );
}
