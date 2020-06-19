import React from 'react';
import './Menu.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Fab from '@material-ui/core/Fab';

import Emoji from './Emoji.js';
import emitMetric from './metrics/metric.js';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    emitMetric("MenuClicked");
  };

  const handleClose = () => {
    setAnchorEl(null);
    emitMetric("MenuClosed");
  };

  const suggestClicked = () => {
    handleClose();
    window.open("https://forms.gle/M4r48CaK8hi25zoJ8", "_blank");
    emitMetric("SuggestClicked");
  }

  const feedbackClicked = () => {
    handleClose();
    window.open("https://forms.gle/pcuCTMKpKUKkqcpd8", "_blank");
    emitMetric("FeedbackClicked");
  }

  const buyCoffeeClicked = () => {
    handleClose();
    window.open("https://buymeacoffee.com/chandlerbarnes", "_blank");
    emitMetric("BuyCoffeeClicked");
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
        <MenuItem onClick={suggestClicked}>I have a task idea&nbsp;&nbsp;<Emoji symbol="💡" /></MenuItem>
        <MenuItem onClick={feedbackClicked}>I want to give my opinion&nbsp;&nbsp;<Emoji symbol="💌" /></MenuItem>
        <MenuItem onClick={buyCoffeeClicked}>Buy Chandler a coffee&nbsp;&nbsp;<Emoji symbol="☕️" /></MenuItem>
      </Menu>
    </div>
  );
}
