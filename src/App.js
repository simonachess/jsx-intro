import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Nav from './components/Nav';
import React from 'react';
import Main from './components/Main';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Nav />
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router >
      </div>
    );
  }
}


export default App;
