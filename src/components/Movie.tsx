import movie from "../Typing/Typing";
import {Link } from "react-router-dom";

function Movie(props:movie){
    return(
        <div>
            <img src={props.medium_cover_image} / >
            <h2>
                <Link to={`/movie/${props.id}`}>{props.title}</Link>
            </h2>
            <p>{props.summary}</p>
            <ul>
                {props.genres.map(g =>
                <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

export default Movie;