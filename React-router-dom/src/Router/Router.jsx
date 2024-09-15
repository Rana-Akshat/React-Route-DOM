import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Users from '../Components/Posts'
import Layout from '../Layout/Layout'
import {getUsers} from '../Components/Posts'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path = "/"
      element = {<Layout />}>
        <Route
        path = ""
        element = {<Home />}>
        </Route>
        <Route
        path = "about"
        element = {<About />}>
        </Route>
        <Route 
        loader = {getUsers}
        path = "users"
        element = {<Users />}
        >
        </Route>
    </Route>
  )
)