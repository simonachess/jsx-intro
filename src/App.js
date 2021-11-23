import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Nav from './components/Nav';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Nav />
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router >
      </div>
    );
  }
}


export default App;
