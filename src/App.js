import './App.css';

import React, { Component } from 'react'
import NavBar from './NavBar';
import News from './News';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* <News country="in" category="science" /> */}
            <Route path='/' element={<News key="general" country="in" category="general" />} />
            <Route path='/entertainment' element={<News key="entertainment" country="in" category="entertainment" />} />
            <Route path='/health' element={<News key="health" country="in" category="health" />} />
            <Route path='/business' element={<News key="business" country="in" category="business" />} />
            <Route path='/science' element={<News key="science" country="in" category="science" />} />
            <Route path='/sports' element={<News key="sports" country="in" category="sports" />} />
            <Route path='/technology' element={<News key="technology" country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

