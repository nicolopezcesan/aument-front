import * as React from 'react';
import IconButton from '@mui/material/IconButton';

interface IconButtons {
  icon: React.ReactElement,
  onClick: any
}

const IconButtons = (props: IconButtons) => {
  const { icon, onClick: method } = props;

  return (
    <IconButton aria-label="edit" onClick={method}>
      {icon}
    </IconButton>
  );
}

export default IconButtons;
