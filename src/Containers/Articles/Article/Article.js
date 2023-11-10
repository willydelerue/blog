// import React from "react";
// import { useParams } from "react-router-dom"


// function Article(props) {
//     let getId = useParams(props);
//     <>
//     return <h1>Ma page Article ({getId.id})</h1>
//     {props.location.state && props.location.state.fromHome ? <p>Lien cliqué depuis Home</p> : null}
//     </>
// }
// export default Article;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';



function Article() {

    const navigate = useNavigate();
    const params = useParams();

    return (
        <>
            <h1>Ma page article({params.id})</h1>
            {navigate.state && navigate.state.fromHome ? <p>Cliqué depuis accueil</p> : null}
        </>
    );
}

export default Article;