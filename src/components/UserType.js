import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../layout/Menu';
import Header from '../layout/Header';

const UserType =()=>{
    
    

    return (
        <>
            <Menu />
            <div className="main-panel">
            <Header />

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <Link to="/UserTypeAlter" className="btn btn-primary btn-fill pull-right"><i className="pe-7s-plus"></i>  Add New </Link>
                                    <h4 className="title"> User Type </h4>
                                </div>
                                <div className="content table-responsive table-full-width">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Entry Datetime</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Dakota Rice</td>
                                                <td>$36,738</td>
                                                <td>
                                                    <Link to="/UserTypeAlter" className="btn btn-success btn-fill"> <i className="pe-7s-edit"></i>   Edit</Link>
                                                    <Link to="/UserTypeAlter" className="btn btn-danger btn-fill"> <i className="pe-7s-trash"></i>  Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Minerva Hooper</td>
                                                <td>$23,789</td>
                                                <td>
                                                    <Link to="/UserTypeAlter" className="btn btn-success btn-fill">Edit</Link>
                                                    <Link to="/UserTypeAlter" className="btn btn-danger btn-fill">Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Sage Rodriguez</td>
                                                <td>$56,142</td>
                                                <td>
                                                    <Link to="/UserTypeAlter" className="btn btn-success btn-fill">Edit</Link>
                                                    <Link to="/UserTypeAlter" className="btn btn-danger btn-fill">Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Philip Chaney</td>
                                                <td>$38,735</td>
                                                <td>
                                                    <Link to="/UserTypeAlter" className="btn btn-success btn-fill">Edit</Link>
                                                    <Link to="/UserTypeAlter" className="btn btn-danger btn-fill">Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Doris Greene</td>
                                                <td>$63,542</td>
                                                <td>
                                                    <Link to="/UserTypeAlter" className="btn btn-success btn-fill">Edit</Link>
                                                    <Link to="/UserTypeAlter" className="btn btn-danger btn-fill">Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Mason Porter</td>
                                                <td>$78,615</td>
                                                <td>
                                                    <Link to="/UserTypeAlter" className="btn btn-success btn-fill">Edit</Link>
                                                    <Link to="/UserTypeAlter" className="btn btn-danger btn-fill">Delete</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
  
}

export default UserType;
