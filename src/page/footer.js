import React from "react";
 const Footer=() =>{
    return( 
        <>
         <footer class="bg-secondary">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h1 class="text-white font-weight-light text-capitalize p-3">
                        
                        </h1>
                        <h3 class="text-light font-weight-light font-italic mb-3">
                            Footer
                        </h3>
                        <div class="py-2">
                            <a href="#">
                                <i class="fab fa-facebook fa-2x text-primary mx-3"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-google-plus fa-2x text-info mx-3"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter fa-2x text-primary mx-3"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-youtube fa-2x text-danger mx-3"></i>
                            </a>
                        </div>
                        <p class="text-light py-4 m-0">
                            &copy;Copyright 2024 - Made by Abhi
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        
        </>
    )
 }

  export default Footer;