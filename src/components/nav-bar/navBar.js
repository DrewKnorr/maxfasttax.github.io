import React, { Component} from "react";
import {NavLink } from "react-router-dom";


export default class NavBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='nav-wrapper'>
                
                <div className='menu-wrapper'>
                    <div className='menu-right' id='right'>
                        <div className='nav-link-wrapper'>
                            <NavLink exact to="/" activeClassName="nav-link">Home</NavLink>
                            <div className='bar'></div>
                        </div>
                        <div className='nav-link-wrapper'>
                            <NavLink to="/about" activeClassName="nav-link">About</NavLink>
                            <div className='bar'></div>
                        </div>
                        <div className='nav-link-wrapper'>
                            <NavLink to="/contact" activeClassName="nav-link">Contact</NavLink>
                            <div className='bar'></div>
                        </div>
                        <div className='nav-link-wrapper'>
                            <NavLink to="/services" activeClassName="nav-link">Services</NavLink>
                            <div className='bar'></div>
                        </div>
                    </div>
                </div>
                <div className='menu-logo'>
                    <h2><NavLink to="/" activeClassName="nav-link">Maximum Financial Services</NavLink></h2>
                </div>
            </div>
        )
    }
}