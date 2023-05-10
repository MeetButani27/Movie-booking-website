import React from 'react'

function MovieItem(props) {
    let {name, show, imageUrl, datee, episodes} = props;

    return (
        <div className="my-4 mx-3">
            <div className="card" >
                <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'10px', top:'10px'}}>
                    <span className="badge rounded-pill bg-danger py-2 px-4"> {show.language} </span>
                </div>

                <img src={imageUrl ? imageUrl.original: "https://moz.com/images/cms/6042b901d424f8.96940036_2021-04-15-230656.png?w=1200&h=630&q=82&auto=format&fit=crop&dm=1618528016&s=b298c4d810e8e8ad23b1fc18e845f64e"} className="card-img-top" alt="..." height="500px" />
                
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '25px' }}>{ name }</h5>
                    <p className="card-text">{ show.type }</p>
                    <p>Rating: { show.rating ? (show.rating.average ? show.rating.average+'/10' : 'Not available') : "Not available" }</p>
                    <p>Runtime: { show.runtime ? show.runtime : 'Not available'}</p>
                    <p className="card-text"><small className="text-muted">Premiered on { new Date(datee).toDateString() }</small></p>
                    { episodes.previousepisode ? <a href={episodes.previousepisode.href} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark me-5">Previous episode</a> : ""}
                </div>
            </div>
        </div>
    )
}

export default MovieItem;