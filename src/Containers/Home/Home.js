// Librairies
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import routes from '../../Config/routes.js';
import axios from '../../Config/axios-firebase.js';

// Composant
import DisplayedArticles from '../../Components/DisplayedArticles/DisplayedArticles.js';


function Home() {

    // State
    const [articles, setArticles] = useState([]);

    // ComponentDidMount
    useEffect(() => {

        axios.get('/articles.json') //?orderBy="date"&limitToLast=3 (affiche 3 articles)
            .then(response => {
                
                let articlesArray = [];

                for (let key in response.data) {
                    articlesArray.push({
                        ...response.data[key],
                        id: key
                    });
                }

                //Chronologie
                articlesArray.reverse();
                
                //Trier
                articlesArray = articlesArray.filter(article => article.brouillon == "false");

                // Limiter à 3
                articlesArray = articlesArray.slice(0, 3);

                setArticles(articlesArray);

            })
            .catch(error => {
                console.log(error);
            });

    }, ([]));

    return (
        <>
            <h1>Accueil</h1>
            <DisplayedArticles articles={articles} />
            <Link to={routes.ARTICLES}>Tous les articles</Link>
        </>
    );
}

export default Home;