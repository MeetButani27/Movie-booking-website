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

                <img src={imageUrl ? imageUrl.original: "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="} className="card-img-top" alt="..." height="500px" />
                
                <div className="card-body" style={{ height: '205px', backgroundColor: '#E5E7E8' }}>
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