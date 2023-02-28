import React from 'react'
import {NavLink } from 'react-router-dom';

export default function LinkC({link}) {
  return (
 <NavLink to={link.link} >{link.name}</NavLink>
  )
}
