import React from 'react'

const Header = ()=> {
    return (
        
        <nav className="navbar navbar-default navbar-fixed">
            <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="/">Inventory</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-left">
                <li>
                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-dashboard" />
                    <p className="hidden-lg hidden-md">Dashboard</p>
                    </a>
                </li>
                <li className="dropdown">
                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-globe" />
                    <b className="caret hidden-sm hidden-xs" />
                    <span className="notification hidden-sm hidden-xs">5</span>
                    <p className="hidden-lg hidden-md">
                        5 Notifications
                        <b className="caret" />
                    </p>
                    </a>
                    <ul className="dropdown-menu">
                    <li><a href="/">Notification 1</a></li>
                    <li><a href="/">Notification 2</a></li>
                    <li><a href="/">Notification 3</a></li>
                    <li><a href="/">Notification 4</a></li>
                    <li><a href="/">Another notification</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/">
                    <i className="fa fa-search" />
                    <p className="hidden-lg hidden-md">Search</p>
                    </a>
                </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="/">
                    <p>Account</p>
                    </a>
                </li>
                <li className="dropdown">
                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                    <p>
                        Dropdown
                        <b className="caret" />
                    </p>
                    </a>
                    <ul className="dropdown-menu">
                    <li><a href="/">Action</a></li>
                    <li><a href="/">Another action</a></li>
                    <li><a href="/">Something</a></li>
                    <li><a href="/">Another action</a></li>
                    <li><a href="/">Something</a></li>
                    <li className="divider" />
                    <li><a href="/">Separated link</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/">
                    <p>Log out</p>
                    </a>
                </li>
                <li className="separator hidden-lg hidden-md" />
                </ul>
            </div>
            </div>
        </nav>
    
    )
}
export default Header;

