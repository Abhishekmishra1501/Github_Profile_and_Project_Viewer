import React from "react";


const Nav =() =>{
    return(
    <>
    

    <nav class="navbar navbar-expand-md navbar-light bg-success">
        <a href="#" class="navbar-brand"><i class="fas fa-child text-warning fa-2x"></i></a>
        <button type="button" class="navbar-toggler bg-light" data-toggle="collapse" data-target="nav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="nav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link text-light text-uppercase font-weight-bold px-3" href="/">Home</a></li>
                <li class="nav-item"><a class="nav-link text-light text-uppercase font-weight-bold px-3" href="About">About</a></li>
               
    
                <li class="nav-item"><a class="nav-link text-light text-uppercase font-weight-bold px-3" href="blog">blog</a></li>
            </ul>
    
          
        </div>
    </nav>
   
    </>
)
}

export default Nav;