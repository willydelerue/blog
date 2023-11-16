
// Librairies

import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import classes from './Article.module.css';

import axios from '../../../Config/axios-firebase';
import classes from './Article.module.css';
import routes from '../../../Config/routes';



const Article = (props) => {

    const navigate = useNavigate();

  // STATES

  const [article, setArticle] = useState({});



  // CYCLE DE VIE

  // ComponentDidMount

  useEffect(() => {

    // Challenge : récupération du titre de l'article depuis Firebase

    // ?orderBy='slug'&equalTo='{slug}'

    axios.get('/articles.json/?orderBy="slug"&equalTo="' + slug + '"')
        .then(response => {

        if(Object.keys(response.data).length === 0) {
            navigate(routes.HOME);
        }
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

  // Fonctions
  const deleteClickedHandler = () => {
    axios.delete('/articles/' + article.id +'.json')
    .then(Response => {                           
        navigate(routes.HOME);
    })
    .catch(error => {
        console.log(error);
    });
  }

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
        <div className={classes.button}>
        <Link 
            to={routes.MANAGE_ARTICLE} 
            state={ {article: article} }>
                <button>Modifier</button>
        </Link>
            <button onClick={deleteClickedHandler}>Supprimer</button>
        </div>
        </div>
        <div className={classes.author}>
            <b>{article.auteur}</b>
            <span>
                Publié le {date}.
            </span>
            {article.brouillon == "true" ? <span className={classes.badge}>Brouillon</span> : null}
        </div>
            </div>

  );

};



export default Article;