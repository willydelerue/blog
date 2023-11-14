
// Librairies

import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

// import classes from './Article.module.css';

import axios from '../../../Config/axios-firebase';
import classes from './Article.module.css';



const Article = (props) => {

  // STATES

  const [article, setArticle] = useState({});



  // CYCLE DE VIE

  // ComponentDidMount

  useEffect(() => {

    // Challenge : récupération du titre de l'article depuis Firebase

    // ?orderBy='slug'&equalTo='{slug}'

    axios.get('/articles.json/?orderBy="slug"&equalTo="' + slug + '"')
        .then(response => {

        // Boucle pour récupération du titre

        for (let key in response.data) {

          setArticle({
            ...response.data[key],
            id: key,

          });

        }

      })

      .catch(error => {

        console.log(error);

      });

  }, []);



  // VARIABLES

  // Variable 1 - slug de l'article

  const { slug } = useParams();



  // Variable 2 - Transformation date locale du pays

  let date = new Date(article.date).toLocaleDateString('fr-FR');



  // Rendu JSX

  return (

    <div className='container'>
        <h1>{article.titre}</h1>
        <div className={classes.content}>
            <div className={classes.lead}>
                {article.accroche}
            </div>
        {article.contenu}
        </div>
        <div className={classes.author}>
            <b>{article.auteur}</b>
            <span>
                Publié le {date}.
            </span>

        </div>
            </div>

  );

};



export default Article;