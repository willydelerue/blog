// Librairies
import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import routes from './Config/routes.js';


// Composants
import Layout from './HOC/Layout/Layout';
import Home from './Containers/Home/Home';
import Contact from './Components/Contact/Contact';
import Articles from './Containers/Articles/Articles';
import Article from './Containers/Articles/Article/Article';
import ManageArticle from './Containers/Admin/ManageArticle/ManageArticle.js';
import Authentification from './Containers/Security/Authentification/Authentification.js';

function App() {

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path={routes.HOME} element ={<Home />} />
          <Route path={routes.CONTACT + "/*"} element ={<Contact />} />
          <Route exact path={routes.ARTICLES} element ={<Articles />} />
          <Route exact path={routes.ARTICLES + "/:slug"} element ={<Article />} />
          <Route exact path={routes.MANAGE_ARTICLE} element ={<ManageArticle  />} />
          <Route exact path={routes.AUTHENTIFICATION} element ={<Authentification  />} />
          <Route render={() => <h1>404</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
