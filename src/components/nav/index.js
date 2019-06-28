import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";


class Nav extends Component{
    

    render(){
        return(
            <Fragment>
                <nav className="black lighten-1">
                    <div className="nav-wrapper">
                    
                        <h2>MatchPoint</h2>
                    </div>
                </nav>
            </Fragment>
        );
        
    }
}

export default Nav;