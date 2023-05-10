import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../src/App.css';

function MovieItem() {

    const location = useLocation();
    const data = location.state;
    const imageUrl = data.show.image; 
    const episodes = data.show._links;

    return (
        <>
            <div className='container my-4 p-5' style={{ display: 'flex', backgroundColor: '#D5E9F1'}}>
                <div style={{ width:'85%', position: 'relative'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'10px', top:'10px'}}>
                        <span className="badge rounded-pill bg-danger py-2 px-4" style={{ fontSize: '14px' }}> {data.show.language} </span>
                    </div>
                    <img src={imageUrl ? imageUrl.original: "https://moz.com/images/cms/6042b901d424f8.96940036_2021-04-15-230656.png?w=1200&h=630&q=82&auto=format&fit=crop&dm=1618528016&s=b298c4d810e8e8ad23b1fc18e845f64e"} className="card-img-top" alt="..." width="240px" height="500px" />
                </div>
                <div className='mx-4 my-1'>
                    <div className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h2 style={{ fontSize: '32px' }}><u>{ data.show.name }</u></h2>
                        <span style={{ 'fontSize': '20px'}}> ({data.show.type}) </span>
                    </div>
                    
                    <div>
                        <p className='my-1'>Premiered on { new Date(data.show.premiered).toDateString() }</p>
                        <p className='my-1'>Rating: { data.show.rating ? (data.show.rating.average ? data.show.rating.average+'/10' : 'Not available') : "Not available" }</p>
                        <p className='my-1'>Runtime: { data.show.runtime ? data.show.runtime+' mins.' : 'Not available'}</p>
                        <p className='my-1'>Genres: { (data.show.genres.length!==0) ? data.show.genres.join(', '): "Not available" } </p>
                        <p className='my-1'>Official website: { data.show.officialSite ? <a href={data.show.officialSite}>{data.show.officialSite}</a> : 'Not available'}</p>
                        <p className='my-1'>Scheduled days: { (data.show.schedule.days.length!==0) ? data.show.schedule.days.join(', ') : 'Not available'}</p>
                        <p className='my-1'>Scheduled time: { data.show.schedule.time ? data.show.schedule.time : 'Not available'}</p>
                    </div>
                    
                    <div className="my-4 mt-5">
                        <h6>Summary:</h6>
                        <p>{data.show.summary}</p>
                    </div>
                    
                    
                    <hr />

                    <div style={{ 'display': 'flex', 'justifyContent': 'space-around'  }}>
                        <span>{ episodes.previousepisode ? <a href={episodes.previousepisode.href} rel="noreferrer" className="btn btn-sm btn-dark py-1 px-3">Previous episode</a> : ""}</span>
                        <span className="btn btn-sm btn-dark py-1 px-4">Book now</span>
                        <span>{ episodes.nextepisode ? <a href={episodes.nextepisode.href} rel="noreferrer" className="btn btn-sm btn-dark py-1 px-3">Next episode</a> : ""}</span>
                    </div>
                </div>
                

            </div>
        </>
  )
}

export default MovieItem;