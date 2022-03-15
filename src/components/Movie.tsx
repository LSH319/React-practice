import movie from "../Typing";

function Movie(props:movie){
    return(
        <div>
            <img src={props.medium_cover_image} / >
            <h2>{props.title}</h2>
            <p>{props.summary}</p>
            <ul>
                {props.genres.map(g =>
                <li key={g}>{g}</li>
                )}
            </ul>
        </div>
    );
}

export default Movie;