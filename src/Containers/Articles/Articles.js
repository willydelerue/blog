import React, { useEffect } from 'react';
// import { Redirect } from 'react-router-dom';

function Articles() {

    useEffect(() => {
        props.history.replace('/');

        /*
            - push : ajouter une page dans l'historique ('/')
                - /
                - /articles
                - /
            -replace : remplacer la page actuelle ('/')
                - /            
        */
    }, []);

    return (
        <>
        <h1>Articles</h1>;
        {/* <Redirect to ="/"></Redirect> redirige l'utilisateur */}

        </>
    )
}

export default Articles;