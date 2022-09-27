import React from 'react';
import styled from 'styled-components';
import './box.css';

interface BoxProps {
  title: string,
  border: boolean
}


export const Box = ({title}:BoxProps) => {
  return (
    <div className='box-wrapper'>
     {title && <h3>{title}</h3>}
    </div>
  );
};

