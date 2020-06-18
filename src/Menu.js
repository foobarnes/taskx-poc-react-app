import React from 'react';
import './Menu.css';
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

  const suggestClicked = () => {
    handleClose();
    window.open("https://forms.gle/M4r48CaK8hi25zoJ8", "_blank");
  }

  const buyCoffeeClicked = () => {
    handleClose();
    window.open("https://buymeacoffee.com/chandlerbarnes", "_blank");
  }

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
        <MenuItem onClick={suggestClicked}>Suggest a task&nbsp;&nbsp;<Emoji symbol="💡" /></MenuItem>
        <MenuItem onClick={handleClose}>Give feedback&nbsp;&nbsp;<Emoji symbol="💌" /></MenuItem>
        <MenuItem onClick={buyCoffeeClicked}>Buy Chandler a coffee&nbsp;&nbsp;<Emoji symbol="☕️" /></MenuItem>
      </Menu>
    </div>
  );
}
