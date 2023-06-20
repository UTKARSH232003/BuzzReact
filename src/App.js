import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
      {/* <Router>
      <Navbar/>
      <Routes>
        <Route path="/"><News pageSize={5} country="in" category="general"/></Route>
        <Route path="/business"><News pageSize={5} country="in" category="business"/></Route>
        <Route path="/entertainment"><News pageSize={5} country="in" category="entertainment"/></Route>
        <Route path="/health"><News pageSize={5} country="in" category="health"/></Route>
        <Route path="/science"><News pageSize={5} country="in" category="science"/></Route>
        <Route path="/sports"><News pageSize={5} country="in" category="sports"/></Route>
        <Route path="/technology"><News pageSize={5} country="in" category="technology"/></Route>
      </Routes>
      </Router> */}
      {/* <Router>
  <Navbar/>
  <Routes>
    <Route path="">
      <Route element={<News pageSize={5} country="in" category="general" />} />
    </Route>
    <Route path="/business">
      <Route element={<News pageSize={5} country="in" category="business" />} />
    </Route>
    <Route path="/entertainment">
      <Route element={<News pageSize={5} country="in" category="entertainment" />} />
    </Route>
    <Route path="/health">
      <Route element={<News pageSize={5} country="in" category="health" />} />
    </Route>
    <Route path="/science">
      <Route element={<News pageSize={5} country="in" category="science" />} />
    </Route>
    <Route path="/sports">
      <Route element={<News pageSize={5} country="in" category="sports" />} />
    </Route>
    <Route path="/technology">
      <Route element={<News pageSize={5} country="in" category="technology" />} />
    </Route>
  </Routes>
</Router> */}


<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<News pageSize={5} country="in" category="business" />} /> {/* Replace <Home /> with the desired component for the root route */}
    <Route path="/business" element={<News pageSize={5} country="in" category="business" />} />
    <Route path="/entertainment" element={<News pageSize={5} country="in" category="entertainment" />} />
    <Route path="/health" element={<News pageSize={5} country="in" category="health" />} />
    <Route path="/science" element={<News pageSize={5} country="in" category="science" />} />
    <Route path="/sports" element={<News pageSize={5} country="in" category="sports" />} />
    <Route path="/technology" element={<News pageSize={5} country="in" category="technology" />} />
  </Routes>
</Router>

      </>
    )
  }
}
