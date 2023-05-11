import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Footer from './Footer';

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
        <div style={{ 'backgroundColor': '#196b85' }}>
            <div className="text-center py-3" style={{ backgroundColor: '#0c1261' }}>
                <h2 style={{ color: 'wheat' }}>Top-10 Trending movies</h2>
            </div>
            <div className="py-4" style={{ padding: '70px' }}>
                <div className="row">
                    { articles.map((element, idx) => {
                        return <div className="col-md-4" key={idx}>
                            <MovieCard name={element.show.name} 
                                show={element.show} 
                                datee={element.show.premiered}
                                imageUrl={element.show.image}
                                episodes={element.show._links} />
                        </div>
                    })}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;