import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";


class Nav extends Component{
    

    render(){
        return(
            <Fragment>
                <nav className="black lighten-1">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/"> MatchPoint</Link>
                        
                        <ul className="right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="products">Products</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                </Fragment>
                
        );
        
    }
}

export default Nav;