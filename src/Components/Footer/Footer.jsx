import React from "react";

export default function Footer() {
    return (
        <footer className="bottom-0">
            <div className="bg-footer">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-3">
                            <div className="text-white text-center">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-white text-center">
                                <h3>AROUND THE WEB</h3>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="social-icon">
                                        <i class="fa-brands fa-facebook"></i>
                                    </div>
                                    <div className="social-icon">
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className="social-icon">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </div>
                                    <div className="social-icon">
                                        <i class="fa-solid fa-globe"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="text-white text-center">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center p-2 bg-bottom">
                <p className="mt-2 text-white">Copyright © Your Website 2021</p>
            </div>
        </footer>
    );
}
