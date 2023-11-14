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

        axios.get('/articles.json?orderBy="date"&limitToLast=3')
            .then(response => {
                
                const articlesArray = [];

                for (let key in response.data) {
                    articlesArray.push({
                        ...response.data[key],
                        id: key
                    });
                }

                articlesArray.reverse();

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