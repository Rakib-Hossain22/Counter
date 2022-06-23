import React from 'react';

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Navbar <span class="badge bg-secondary"> { props.nonZeroItem } </span>
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;
