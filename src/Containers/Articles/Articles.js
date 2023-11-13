import React, { useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import routes from "../../Config/routes";

function Articles(props) {
    
    // const navigate = useNavigate();

    // useEffect(() => {
    //     navigate('/');

    // //     /*
    // //         - push : ajouter une page dans l'historique ('/')
    // //             - /
    // //             - /articles
    // //             - /
    // //         -replace : remplacer la page actuelle ('/')
    // //             - /            
    // //     */
    // }, []);

    return (
        <>
        <h1>Articles</h1>;
        <Link to={routes.CONTACT}></Link>
        {/* <Redirect to ="/"></Redirect> redirige l'utilisateur */}
        </>
    );
}

export default Articles;