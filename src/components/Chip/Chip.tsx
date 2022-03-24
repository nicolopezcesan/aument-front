import React from 'react';
import './styles.css';

interface IProps {
  label: string
}
const Chip = (props: IProps) => {
  const { label } = props;

  return (
    <div className='chip'>{label}</div>
  )
}

export default Chip