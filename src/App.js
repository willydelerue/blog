// Librairies
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Composants
import Layout from './HOC/Layout/Layout';
import Home from './Containers/Home/Home';
import Contact from './Components/Contact/Contact';
import Articles from './Containers/Articles/Articles';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/articles" Component={Articles} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
