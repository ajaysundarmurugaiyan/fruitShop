import React from 'react';

function Navbar() {
  return (
    <div>
       <div class="contain pt-3 bg-dark">
      <div class="row">
        <div class="col-md-4">
          <h3 class=" text-red-500 px-44">logo</h3>
        </div>
        <div class="col-md">
          <Link to="Home" class="text-white">
            home
          </Link>
        </div>
        <div class="col-md">
          <Link to="/about" class="text-white">
            about
          </Link>
        </div>
        <div class="col-md">
          <Link to="/services" class="text-white">
            services
          </Link>
        </div>
        <div class="col-md">
          <Link to="/contact" class="text-white">
            contact
          </Link>
        </div>
        <div class="col-md-3 pb-3 text-center">
          <button class="btn btn-danger">
            <h5>signup</h5>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar;
