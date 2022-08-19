import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Menu from '../layout/Menu';
import Header from '../layout/Header';

export default function UserTypeAlter() {
    const [data, setData]=useState({
        useType:''
    })
    const handleSubmit = async ()=>{
        console.log(data)
    }
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
                                    <Link to="/UserType" className="btn btn-primary btn-fill pull-right"><i className="pe-7s-back"></i>  Back </Link>
                                    <h4 className="title">User Type Alter</h4>
                                </div>
                                <div className="content">

                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label>User Type</label>
                                                <input type="text" className="form-control" name='useType' value={data.useType}
                                                onChange={(e)=>setData({...data, [e.target.name]:e.target.value})}
                                                placeholder="User Type" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <input type="button" className="btn btn-info btn-fill" value="Save" onClick={handleSubmit} />
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
        </>
  )
}
