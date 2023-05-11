import React from 'react';

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-center text-white mt-4">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i className="fab fa-google"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i className="fab fa-github"></i></a>
                </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Designed by: Meet S. Butani © 2023
            </div>
        </footer>
    </div>
  )
}

export default Footer;