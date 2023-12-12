
// Librairies

import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import classes from './Article.module.css';

import axios from '../../../Config/axios-firebase';
import classes from './Article.module.css';
import routes from '../../../Config/routes';
import { toast } from 'react-toastify';
import moment from 'moment';
import 'moment/locale/fr';



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
            toast.error("Cet article n'existe pas");
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

  useEffect(() => {
    document.title = article.titre; 
  });

  // Fonctions
  const deleteClickedHandler = () => {

      props.user.getIdToken()
        .then(token => {

        axios.delete('/articles/' + article.id +'.json?auth=' + token)
        .then(Response => {     
            toast.success('Article supprimé avec succès');                      
            navigate(routes.HOME);
          })
        .catch(error => {
            console.log(error);
          });
        })
        .catch(error => {
          console.log(error);
      });
  }

  // VARIABLES

  // Variable 1 - slug de l'article

  const { slug } = useParams();



  // Variable 2 - Transformation date locale du pays

  // let date = new Date(article.date).toLocaleDateString('fr-FR');
  moment.locale('fr');
  let date = moment.unix(article.date / 1000).calendar();

  let contenu = '';
    if(article.contenu) {
        contenu  = article.contenu.split('\n').map(str => <p>{str}</p>)
    }


  // Rendu JSX

  return (

    <div className='container'>
        <h1>{article.titre}</h1>

        <div className={classes.content}>
            <div className={classes.lead}>
                {article.accroche}
            </div>
            {contenu}

            {props.user ?
              <div className={classes.button}>
                <Link 
                    to={routes.MANAGE_ARTICLE} 
                    state={ {article: article} }>
                        <button>Modifier</button>
                </Link>
                <button onClick={deleteClickedHandler}>Supprimer</button>
              </div>

              :

              null
          }

        </div>

        <div className={classes.author}>
            <b>{article.auteur}</b>
            <span>
                Publié {date}.
            </span>
            {article.brouillon == "true" ? <span className={classes.badge}>Brouillon</span> : null}
        </div>
    </div>

  );

};



export default Article;