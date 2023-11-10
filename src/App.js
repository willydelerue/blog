// Librairies
import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import routes from './routes.js';

// Composants
import Layout from './HOC/Layout/Layout';
import Home from './Containers/Home/Home';
import Contact from './Components/Contact/Contact';
import Articles from './Containers/Articles/Articles';
import Article from './Containers/Articles/Article/Article';

function App() {

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path={routes.HOME} element ={<Home />} />
          <Route path={routes.CONTACT + "/*"} element ={<Contact />} />
          <Route exact path={routes.ARTICLES} element ={<Articles />} />
          <Route exact path={routes.ARTICLES + "/:id"} element ={<Article />} />
          <Route render={() => <h1>404</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
