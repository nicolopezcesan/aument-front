import React from 'react';
import './styles.css';

interface IProps {
  label: string
  color?: string
}
const Chip = (props: IProps) => {
  const { label, color = '#84d18e' } = props;

  return (
    <div className='chip' style={{ backgroundColor: color }}>
      {label}
    </div>
  )
}

export default Chip