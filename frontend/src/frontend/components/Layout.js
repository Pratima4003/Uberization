import React from 'react'
import Navbar from './header/navbar'
import { Outlet } from 'react-router-dom'
import {  useState } from "react";
import { BrowserRouter as Router, Routes,Route,Navigate } from "react-router-dom";
import Navbar1 from './header/navbar1';

export default function Layout() {
  const [loggedIn, setLoggedIn] = useState(true)
  const toggleRoute = () =>{
    setLoggedIn(!loggedIn)
  }
  return (
    <>
    {/* <Navbar1/> */}
    <Outlet />
    </>
  )
}
