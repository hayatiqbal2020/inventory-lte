import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Menu from '../layout/Menu';
import Header from '../layout/Header';

const UserType =()=>{
    
    const [state, setState] = useState({name: 'Hayat'});

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
                                    <h4 className="title">{state.name}</h4>
                                    <p className="category">Here is a subtitle for this table</p>
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
                                                    <Link to="/UserTypeAlter" className="btn btn-primary btn-fill">Edit</Link>
                                                    <Link to="/UserTypeAlter" className="btn btn-danger btn-fill">Delete</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Minerva Hooper</td>
                                                <td>$23,789</td>
                                                <td>Curaçao</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Sage Rodriguez</td>
                                                <td>$56,142</td>
                                                <td>Netherlands</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Philip Chaney</td>
                                                <td>$38,735</td>
                                                <td>Korea, South</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Doris Greene</td>
                                                <td>$63,542</td>
                                                <td>Malawi</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Mason Porter</td>
                                                <td>$78,615</td>
                                                <td>Chile</td>
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
