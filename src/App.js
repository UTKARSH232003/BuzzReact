import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App =() => {
    const pageSize = 5;
    const apiKey=process.env.REACT_APP_NEWS_API
  
    const [progress, setProgress] = useState(0)
    

        return (
          <>
          {/* <Router>
          <Navbar/>
          <Routes>
            <Route path="/"><News setProgress={setProgress} pageSize={pageSize} country="in" category="general"/></Route>
            <Route path="/business"><News setProgress={setProgress} pageSize={pageSize} country="in" category="business"/></Route>
            <Route path="/entertainment"><News setProgress={setProgress} pageSize={pageSize} country="in" category="entertainment"/></Route>
            <Route path="/health"><News setProgress={setProgress} pageSize={pageSize} country="in" category="health"/></Route>
            <Route path="/science"><News setProgress={setProgress} pageSize={pageSize} country="in" category="science"/></Route>
            <Route path="/sports"><News setProgress={setProgress} pageSize={pageSize} country="in" category="sports"/></Route>
            <Route path="/technology"><News setProgress={setProgress} pageSize={pageSize} country="in" category="technology"/></Route>
          </Routes>
          </Router> */}
          {/* <Router>
      <Navbar/>
      <Routes>
        <Route path="">
          <Route element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="general" />} />
        </Route>
        <Route path="/business">
          <Route element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="business" />} />
        </Route>
        <Route path="/entertainment">
          <Route element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="entertainment" />} />
        </Route>
        <Route path="/health">
          <Route element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="health" />} />
        </Route>
        <Route path="/science">
          <Route element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="science" />} />
        </Route>
        <Route path="/sports">
          <Route element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="sports" />} />
        </Route>
        <Route path="/technology">
          <Route element={<News setProgress={setProgress} pageSize={pageSize} country="in" category="technology" />} />
        </Route>
      </Routes>
    </Router> */}    

    <Router>
      <Navbar/>
      <LoadingBar color="red" progress={progress}height = {3}/>
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} apiKey = {apiKey} key= "general" pageSize={pageSize} country="in" category="general" />} /> {/* Replace <Home /> with the desired component for the root route */}
        <Route path="/general" element={<News setProgress={setProgress} apiKey = {apiKey} key= "general" pageSize={pageSize} country="in" category="general" />} /> {/* Replace <Home /> with the desired component for the root route */}
        <Route path="/business" element={<News setProgress={setProgress} apiKey = {apiKey} key= "business" pageSize={pageSize} country="in" category="business" />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} apiKey = {apiKey} key= "entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
        <Route path="/health" element={<News setProgress={setProgress} apiKey = {apiKey} key= "health" pageSize={pageSize} country="in" category="health" />} />
        <Route path="/science" element={<News setProgress={setProgress} apiKey = {apiKey} key= "science" pageSize={pageSize} country="in" category="science" />} />
        <Route path="/sports" element={<News setProgress={setProgress} apiKey = {apiKey} key= "sports" pageSize={pageSize} country="in" category="sports" />} />
        <Route path="/technology" element={<News setProgress={setProgress} apiKey = {apiKey} key= "technology" pageSize={pageSize} country="in" category="technology" />} />
      </Routes>
    </Router>

      </>
    )
}
export default App;