import React, { useState } from 'react'

const Login = ()=> {
    const [state, setState] = useState({});

    const changeHandler=(event)=>{
        //console.log(event);
        setState({...state, [event.target.name] : event.target.value})
    }
    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse">
                        
                    </div>
                </div>
            </nav>
           {/*   you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple" */}

            <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
                <div className="sidebar-wrapper">
                <div className="logo">
                    <a href="/Login" className="simple-text">
                        Login
                    </a>
                </div>
                
                </div>
            </div>

            <div className="main-panel">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                <div className="header">
                                    <h4 className="title">Login</h4>
                                </div>
                                <div className="content">
                                    
                                    <div className="row">
                                        {/* {JSON.stringify(state)} */}
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label> Mobile No</label>
                                                <input type="tel" className="form-control" placeholder="Mobile No" name="mobile_no" onChange={changeHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" name="password" placeholder="Password" onChange={changeHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <button type="submit" className="btn btn-info btn-fill pull-left">Login</button>
                                        <div className="clearfix" />
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
  
}

export default Login;