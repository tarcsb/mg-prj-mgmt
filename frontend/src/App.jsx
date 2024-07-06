import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        {/* Add other routes here */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
