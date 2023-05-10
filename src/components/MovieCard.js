import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard(props) {
    let {name, show, imageUrl, datee} = props;
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/moviedetails', {state: {show: show}});
    }

    return (
        <div className="my-4 mx-3">
            <div className="card" >
                <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'10px', top:'10px'}}>
                    <span className="badge rounded-pill bg-danger py-2 px-4"> {show.language} </span>
                </div>

                <img src={imageUrl ? imageUrl.original: "https://moz.com/images/cms/6042b901d424f8.96940036_2021-04-15-230656.png?w=1200&h=630&q=82&auto=format&fit=crop&dm=1618528016&s=b298c4d810e8e8ad23b1fc18e845f64e"} className="card-img-top" alt="..." height="500px" />
                
                <div className="card-body" style={{ height: '200px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h5 className="card-title" style={{ fontSize: '25px' }}>{ name }</h5>
                        <span style={{ 'fontSize': '17px'}}> ({show.type}) </span>
                    </div>
                    
                    {/* <p className="card-text">{ show.type }</p> */}
                    <span>Runtime: { show.runtime ? show.runtime+' mins.' : 'Not available'}</span>
                    <br />
                    <span>Rating: { show.rating ? (show.rating.average ? show.rating.average+'/10' : 'Not available') : "Not available" }</span>
                    <p className='py-2'></p>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className="card-text"><small className="text-muted">Premiered on { new Date(datee).toDateString() }</small></p>
                        <p><button className="btn btn-sm btn-dark py-1 px-3" onClick={ handleSubmit }>Know more</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;