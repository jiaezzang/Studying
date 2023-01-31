import { useEffect } from "react";
import { useParams } from "react-router";
function Detail() {
    const {id} = useParams();
    const {title} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            console.log(json);
            title = json.data.movie.title;
    }
    useEffect(() => {
        getMovie();
    }, [])
    return <div>
        <h2>{title}</h2>
    </div>
}

export default Detail;