import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Form() {
  const location = useLocation();
  const data = location.state;
  const imageUrl = data.show.show.image;
  const nav = useNavigate();

  const handleSubmit = () => {
    alert('Your ticket has been booked successfully !!');
    nav('/home');
  }

  return (
    <div style={{ backgroundColor: "#4d72b0"}}>
      <div className='py-3'>
        <div className='container my-4 p-5' style={{ display: 'flex', 'backgroundColor': '#E5E7E8' }}>
            <div style={{ width:'35%', position: 'relative'}}>
                <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'10px', top:'10px'}}>
                    <span className="badge rounded-pill bg-danger py-2 px-4" style={{ fontSize: '14px' }}> {data.show.show.language} </span>
                </div>
                <img src={imageUrl ? imageUrl.original: "https://moz.com/images/cms/6042b901d424f8.96940036_2021-04-15-230656.png?w=1200&h=630&q=82&auto=format&fit=crop&dm=1618528016&s=b298c4d810e8e8ad23b1fc18e845f64e"} className="card-img-top" alt="..." width="240px" height="500px" />
            </div>

            <div className='ms-4 my-1' style={{ width:'80%' }}>
                <div>
                  <h2 className="pb-3"><u>Book now</u></h2>
                  <form onSubmit={ handleSubmit }>
                    <table>
                      <tr className="py-2">
                        <td className="pe-5 py-2">Movie name:</td>
                        <td> {data.show.show.name} </td>
                      </tr>

                      <tr className="py-2">
                        <td className="pe-5 py-2">Language:</td>
                        <td> {data.show.show.language} </td>
                      </tr>

                      <tr className="py-2">
                        <td>Scheduled days:</td>
                        <td className="pe-5 py-2"> {(data.show.show.schedule.days.length!==0) ? data.show.show.schedule.days.join(', ') : 'Not available'} </td>
                      </tr>

                      <tr className="py-2">
                        <td className="pe-5 py-2">Scheduled time:</td>
                        <td> {data.show.show.schedule.time ? data.show.show.schedule.time : 'Not available'} </td>
                      </tr>

                      <tr className="py-2">
                        <td className="pe-5 py-2">Full name:</td>
                        <td><input type="text" required /></td>
                      </tr>

                      <tr className="py-2">
                        <td className="pe-5 py-2">Email address:</td>
                        <td><input type="email" required /></td>
                      </tr>

                      <tr className="py-2">
                        <td className="pe-5 py-2">Mobile no.:</td>
                        <td><input type="text" required /></td>
                      </tr>

                      <tr>
                        <td className="pe-5 py-2">Seats to book:</td>
                        <td><input type="number" required /></td>
                      </tr>

                      <tr className="py-2 text-center">
                        <td colSpan="5"><button className="btn btn-sm btn-dark py-1 px-4 mt-5">Proceed to Pay </button></td>
                      </tr>
                    </table>
                  </form>
                </div>
            </div>  
        </div>
      </div>
    </div>
  );
}

export default Form;
