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
import Article from './Containers/Articles/Article/Article';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route exact path="/articles" Component={Articles} />
          <Route exact path='/articles/:id' Component={Article} />
          <Route render={() => <h1>404</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
