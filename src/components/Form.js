import React, { Component } from 'react'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event){
        this.setState({
            [event.target.name]: parseFloat(event.target.value)
        });
        
        
    }
    render(){
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
                        <a href="/" className="simple-text">
                            Blank Form
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
                                        <h4 className="title">Blank Form</h4>
                                    </div>
                                    <div className="content">
                                        
                                        <div className="row">
                                            {/* {JSON.stringify(state)} */}
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <label> Num 1 </label>
                                                    <input type="tel" className="form-control" placeholder="Number 1" value={this.state.num1} name="num1" onChange={this.changeHandler} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <label> Num 2 </label>
                                                    <input type="tel" className="form-control" placeholder="Number 2" value={this.state.num2} name="num2" onChange={this.changeHandler} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <label> Result </label>
                                                    <input type="tel" className="form-control" name="result" value={((this.state.num1 ?? 0) + (this.state.num2 ?? 0))} disabled />
                                                </div>
                                            </div>
                                        </div>
                                        
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
}

export default Login;