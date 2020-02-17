import React, { Component} from "react";




export default class Contact extends Component{
    constructor(){
        super();
        this.state={
            banner_text:["TEST"]
        }
    }
    render(){
        return(
            <div className="contact-wrapper">
                <div className="contact-item" id="first">
                    <form className="contact-form">
                        <div className="form-item">
                            <label>First Name: </label>
                            <input name='' value=''/>
                        </div>
                        
                        <div className="form-item">
                            <label>Last Name: </label>
                            <input name='' value=''/>
                        </div>
                        
                        <div className="form-item">
                            <label>Email: </label>
                            <input name='' value=''/>
                        </div>
                        
                        <div className="form-item">
                            <label>Request Type: </label>
                            <div className="form-radio">
                                <div className="radio-btn">
                                    <label>Tax Preparation & Planning</label>
                                    <input type='radio' name='request_type'/>
                                </div>
                                <div className="radio-btn">
                                    <label>Financial Statements</label>
                                    <input type='radio' name='request_type'/>
                                </div>
                                <div className="radio-btn">
                                    <label>Payroll Services</label>
                                    <input type='radio' name='request_type'/>
                                </div>
                                <div className="radio-btn">
                                    <label>Bookkeeping/Write-Up </label>
                                    <input type='radio' name='request_type'/>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                        <div className="form-item">
                            <label>Extra Information:</label>
                            <input name='' value=''/>
                        </div>
                        <div className="form-item">
                            <button>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
            
        )
    }
}