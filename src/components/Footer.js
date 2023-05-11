import React from 'react';

function Footer() {
  return (
    <div>
        <footer class="bg-dark text-center text-white mt-4">
            <div class="container p-4 pb-0">
                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i class="fab fa-google"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i class="fab fa-instagram"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1 mx-2" href="#!"><i class="fab fa-github"></i></a>
                </section>
            </div>

            <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Designed by: Meet S. Butani © 2023
            </div>
        </footer>
    </div>
  )
}

export default Footer;