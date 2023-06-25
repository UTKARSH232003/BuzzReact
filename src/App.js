import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
pageSize = 5;
apiKey = process.env.REACT_APP_NEWS_API;

state = {
  progress : 1
}

setProgress = (progress) => {
  this.setState({progress: progress})
}

  render() {
    return (
      <>
      {/* <Router>
      <Navbar/>
      <Routes>
        <Route path="/"><News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="general"/></Route>
        <Route path="/business"><News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="business"/></Route>
        <Route path="/entertainment"><News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="entertainment"/></Route>
        <Route path="/health"><News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="health"/></Route>
        <Route path="/science"><News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="science"/></Route>
        <Route path="/sports"><News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="sports"/></Route>
        <Route path="/technology"><News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="technology"/></Route>
      </Routes>
      </Router> */}
      {/* <Router>
  <Navbar/>
  <Routes>
    <Route path="">
      <Route element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="general" />} />
    </Route>
    <Route path="/business">
      <Route element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="business" />} />
    </Route>
    <Route path="/entertainment">
      <Route element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="entertainment" />} />
    </Route>
    <Route path="/health">
      <Route element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="health" />} />
    </Route>
    <Route path="/science">
      <Route element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="science" />} />
    </Route>
    <Route path="/sports">
      <Route element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="sports" />} />
    </Route>
    <Route path="/technology">
      <Route element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="technology" />} />
    </Route>
  </Routes>
</Router> */}    

<Router>
  <Navbar/>
  <LoadingBar color="red" progress={this.state.progress}height = {3}/>
  <Routes>
    <Route path="/" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key= "general" pageSize={this.pageSize} country="in" category="general" />} /> {/* Replace <Home /> with the desired component for the root route */}
    <Route path="/general" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key= "general" pageSize={this.pageSize} country="in" category="general" />} /> {/* Replace <Home /> with the desired component for the root route */}
    <Route path="/business" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key= "business" pageSize={this.pageSize} country="in" category="business" />} />
    <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key= "entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
    <Route path="/health" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key= "health" pageSize={this.pageSize} country="in" category="health" />} />
    <Route path="/science" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key= "science" pageSize={this.pageSize} country="in" category="science" />} />
    <Route path="/sports" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key= "sports" pageSize={this.pageSize} country="in" category="sports" />} />
    <Route path="/technology" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key= "technology" pageSize={this.pageSize} country="in" category="technology" />} />
  </Routes>
</Router>

      </>
    )
  }
}
