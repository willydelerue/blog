import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import routes from "../../Config/routes";
import axios from '../../Config/axios-firebase';

// Composant
import DisplayedArticles from '../../Components/DisplayedArticles/DisplayedArticles'

function Articles() {

    // State
    const [articles, setArticles] = useState([]);

    // ComponentDidMount
    useEffect(() => {

        axios.get('/articles.json')
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

    }, []);

    return (
        <>
            <h1>Articles</h1>
            <DisplayedArticles articles={articles} />
        </>
    );
}

export default Articles;