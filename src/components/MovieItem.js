import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../src/App.css';

function MovieItem() {

    const location = useLocation();
    const data = location.state;
    const imageUrl = data.show.image; 
    const episodes = data.show._links;
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/booking', {state: {show: location.state}});
    }

    return (
        <div style={{ backgroundColor: "#4d72b0"}}>
            <div className='py-5'>
                <div className='container p-5' style={{ display: 'flex', 'backgroundColor': '#E5E7E8' }}>
                    <div style={{ width:'85%', position: 'relative'}}>
                        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'10px', top:'10px'}}>
                            <span className="badge rounded-pill bg-danger py-2 px-4" style={{ fontSize: '14px' }}> {data.show.language} </span>
                        </div>
                        <img src={imageUrl ? imageUrl.original: "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="} className="card-img-top" alt="..." width="240px" height="500px" />
                    </div>
                    <div className='mx-4 my-1'>
                        <div className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2 style={{ fontSize: '32px' }}><u>{ data.show.name }</u></h2>
                            <span style={{ 'fontSize': '20px'}}> ({data.show.type}) </span>
                        </div>
                        
                        {/* <div>
                            <p className='my-1'><b>Premiered:</b> { new Date(data.show.premiered).toDateString() }</p>
                            <p className='my-1'><b>Rating:</b> { data.show.rating ? (data.show.rating.average ? data.show.rating.average+'/10' : 'Not available') : "Not available" }</p>
                            <p className='my-1'><b>Runtime:</b> { data.show.runtime ? data.show.runtime+' mins.' : 'Not available'}</p>
                            <p className='my-1'><b>Genres:</b> { (data.show.genres.length!==0) ? data.show.genres.join(', '): "Not available" } </p>
                            <p className='my-1'><b>Official website:</b> { data.show.officialSite ? <a href={data.show.officialSite}>{data.show.officialSite}</a> : 'Not available'}</p>
                            <p className='my-1'><b>Scheduled days:</b> { (data.show.schedule.days.length!==0) ? data.show.schedule.days.join(', ') : 'Not available'}</p>
                            <p className='my-1'><b>Scheduled time:</b> { data.show.schedule.time ? data.show.schedule.time : 'Not available'}</p>
                        </div> */}
                        
                        <table>
                            <tr className="py-2">
                                <td className="pe-5 py-1"><b>Premiered:</b></td>
                                <td> { new Date(data.show.premiered).toDateString() } </td>
                            </tr>

                            <tr className="py-2">
                                <td className="pe-5 py-1"><b>Rating:</b></td>
                                <td> { data.show.rating ? (data.show.rating.average ? data.show.rating.average+'/10' : 'Not available') : "Not available" } </td>
                            </tr>

                            <tr className="py-2">
                                <td className="pe-5 py-1"><b>Runtime:</b></td>
                                <td> { data.show.runtime ? data.show.runtime+' mins.' : 'Not available'} </td>
                            </tr>

                            <tr className="py-2">
                                <td className="pe-5 py-1"><b>Genres:</b></td>
                                <td> { (data.show.genres.length!==0) ? data.show.genres.join(', '): "Not available" } </td>
                            </tr>

                            <tr className="py-2">
                                <td className="pe-5 py-1"><b>Official website:</b></td>
                                <td> { data.show.officialSite ? <a href={data.show.officialSite}>{data.show.officialSite}</a> : 'Not available'} </td>
                            </tr>

                            <tr className="py-2">
                                <td className="pe-5 py-1"><b>Scheduled days:</b></td>
                                <td> { (data.show.schedule.days.length!==0) ? data.show.schedule.days.join(', ') : 'Not available'} </td>
                            </tr>

                            <tr className="py-2">
                                <td className="pe-5 py-1"><b>Scheduled time:</b></td>
                                <td> { data.show.schedule.time ? data.show.schedule.time : 'Not available'} </td>
                            </tr>
                        </table>

                        <div className="my-3 pt-3 pb-2">
                            <h6><b>Summary:</b></h6>
                            <p>{data.show.summary}</p>
                        </div>
                        
                        
                        <hr />

                        <div style={{ 'display': 'flex', 'justifyContent': 'space-around'  }}>
                            <span>{ episodes.previousepisode ? <a href={episodes.previousepisode.href} rel="noreferrer" className="btn btn-sm btn-dark py-1 px-3">Previous episode</a> : ""}</span>
                            <span className="btn btn-sm btn-warning py-1 px-4" style={{ border:'1px solid black' }} onClick={ handleSubmit }>Book now</span>
                            <span>{ episodes.nextepisode ? <a href={episodes.nextepisode.href} rel="noreferrer" className="btn btn-sm btn-dark py-1 px-3">Next episode</a> : ""}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default MovieItem;