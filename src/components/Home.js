import React from 'react';
import { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

function Home() {

    const [articles, setArticles] = useState([]);

    const fetchMovies = async () => {
        const url = `https://api.tvmaze.com/search/shows?q=all`;
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(parsedData);
    }

    useEffect(() => {
        fetchMovies();
    }, [])


    return (
        <div style={{ 'backgroundImage': 'linear-gradient(to right top, #1b4076, #006290, #008088, #009a64, #88aa3c)' }}>
            <div className="py-5" style={{ padding: '80px' }}>
                <div className="row">
                    { articles.map((element, idx) => {
                        return <div className="col-md-4" key={idx}>
                            {/* <p> {element.show.name} </p>
                            <p> {element.show.genres} </p>
                            <p> {element.score}</p>
                            <p> {element.show.summary} </p> */}
                            <MovieItem name={element.show.name} 
                                show={element.show} 
                                datee={element.show.premiered}
                                imageUrl={element.show.image}
                                episodes={element.show._links} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;